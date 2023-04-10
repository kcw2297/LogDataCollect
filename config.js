import { Client } from "@opensearch-project/opensearch";

export const client = new Client({
  node: process.env.SERVICE_URL,
  ssl: {
    rejectUnauthorized: false, // Add this line if you're using self-signed certificates
  },
});
