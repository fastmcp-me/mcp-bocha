[![Add to Cursor](https://fastmcp.me/badges/cursor_dark.svg)](https://fastmcp.me/MCP/Details/648/bocha-web-search)
[![Add to VS Code](https://fastmcp.me/badges/vscode_dark.svg)](https://fastmcp.me/MCP/Details/648/bocha-web-search)
[![Add to Claude](https://fastmcp.me/badges/claude_dark.svg)](https://fastmcp.me/MCP/Details/648/bocha-web-search)
[![Add to ChatGPT](https://fastmcp.me/badges/chatgpt_dark.svg)](https://fastmcp.me/MCP/Details/648/bocha-web-search)
[![Add to Codex](https://fastmcp.me/badges/codex_dark.svg)](https://fastmcp.me/MCP/Details/648/bocha-web-search)
[![Add to Gemini](https://fastmcp.me/badges/gemini_dark.svg)](https://fastmcp.me/MCP/Details/648/bocha-web-search)

# mcp-bocha

A Model Context Protocol (MCP) server that provides web search capabilities to AI agents using the Bocha API.

<a href="https://glama.ai/mcp/servers/@intounknown/mcp-bocha">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@intounknown/mcp-bocha/badge" alt="MCP-Bocha MCP server" />
</a>

## Introduction

MCP-Bocha is a tool that exposes Bocha AI's web search API capabilities through the Model Context Protocol. It allows AI assistants to search the web programmatically, enabling tasks such as information retrieval, research, and up-to-date data collection.

## Tools

| Tool Name            | Description                      | Parameters                                                                           |
| -------------------- | -------------------------------- | ------------------------------------------------------------------------------------ |
| `mcp-bocha_search`   | Search the web for information   | `query`: The search query string<br>`freshness`: Optional time filter ["oneDay", "oneWeek", "oneMonth", "oneYear", "noLimit"]<br>`summary`: Optional boolean for summarized results<br>`include`: Optional array of domains to include<br>`exclude`: Optional array of domains to exclude<br>`count`: Optional number of results to return |

## Usage

```json
{
  "mcpServers": {
    "mcp-bocha": {
      "command": "npx",
      "args": ["-y", "@humansean/mcp-bocha"],
      "env": {
        "BOCHA_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}
```

## License

Apache-2.0 license