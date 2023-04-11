import { Client } from "@opensearch-project/opensearch";

export const client = new Client({
  node: "https://localhost:9200",
  ssl: {
    rejectUnauthorized: false, // Add this line if you're using self-signed certificates
  },
});

