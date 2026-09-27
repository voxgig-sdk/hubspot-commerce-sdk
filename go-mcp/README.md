# hubspot-commerce-mcp

[MCP](https://modelcontextprotocol.io) server exposing the HubspotCommerce SDK as
two agent tools — `hubspot-commerce_list` and `hubspot-commerce_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/hubspot-commerce-mcp)
make build

# 2. Provide credentials via the environment
export HUBSPOT_COMMERCE_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user hubspot-commerce \
  -- /absolute/path/to/hubspot-commerce-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./hubspot-commerce-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// hubspot-commerce_list: first page of records
{ "entity": "contracts_contract_change_summary" }
{ "entity": "contracts_contract_change_summary", "query": { } }

// hubspot-commerce_load: one record by id
{ "entity": "contract", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/hubspot-commerce-mcp
   ```

2. **Set your API key:**

   ```sh
   export HUBSPOT_COMMERCE_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user hubspot-commerce \
     -- "$PWD"/dist/*/hubspot-commerce-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `hubspot-commerce_list` and `hubspot-commerce_load` tools now appear
   in new sessions. Ask the agent to *"list contracts_contract_change_summary using hubspot-commerce"*
   and it calls `hubspot-commerce_list` with `{"entity":"contracts_contract_change_summary"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export HUBSPOT_COMMERCE_APIKEY=sk_live_xxx            # API key
export HUBSPOT_COMMERCE_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./hubspot-commerce-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `hubspot-commerce_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "contracts_contract_change_summary" }
```

### Call the `hubspot-commerce_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "contract", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `hubspot-commerce_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `hubspot-commerce_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 25 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `HUBSPOT_COMMERCE_APIKEY` | API key sent with every request. |
| `HUBSPOT_COMMERCE_BASE` | Optional override of the API base URL. |

### Entities

The 25 entities valid as the `entity` argument:

advanced | basic | batch | contract | contracts_contract | contracts_contract_change | contracts_contract_change_preview | contracts_contract_change_summary | contracts_quote | item | payment_link | payment_methods_commerce_payment_method_settings_public | payments_action_response_with_single_result_simple_public_object | payments_create_manual_payment_public | payments_settings_get_billing_settings_public | payments_settings_get_checkout_fees_public | payments_settings_get_policy_settings_public | payments_settings_get_shipping_settings_public | paymentsaccounts_payment_account_view | price_book | price_books_batch_response_price_book_item | price_books_collection_response_price_book_item_response_forward | price_books_price_book | price_books_price_book_item | price_books_price_book_validate

### Smoke test via HTTP (raw JSON-RPC)

```sh
./hubspot-commerce-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"hubspot-commerce_load","arguments":{"entity":"contract","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
