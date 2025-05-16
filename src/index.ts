#!/usr/bin/env node
import { FastMCP } from "fastmcp";
import { z } from "zod";

const server = new FastMCP({
  name: "mcp-bocha",
  version: "1.0.1",
});

const apiKey = process.env.BOCHA_API_KEY;

// Search the web for information
server.addTool({
  name: "mcp-bocha_search",
  description: "Search the web for information",
  parameters: z.object({
    query: z.string(),
    freshness: z
      .enum(["oneDay", "oneWeek", "oneMonth", "oneYear", "noLimit"])
      .optional(),
    summary: z.boolean().optional(),
    include: z.array(z.string()).optional(),
    exclude: z.array(z.string()).optional(),
    count: z.number().optional(),
  }),
  execute: async (params) => {
    const response = await fetch("https://api.bochaai.com/v1/web-search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        ...params,
        include: params.include?.join(","),
        exclude: params.exclude?.join(","),
      }),
    });

    const {
      data: { webPages },
    } = await response.json();

    const result = [
      ...webPages.value.map((page: any) => ({
        type: "text",
        text: JSON.stringify(page),
      })),
    ];

    return {
      content: result,
    };
  },
});

server.start({
  transportType: "stdio",
});
