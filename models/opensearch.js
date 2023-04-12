import { Client } from "@opensearch-project/opensearch";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export const client = new Client({
  // node: "https://opensearch-node1:9200",
  // node: "https://localhost:9200",
  node: "https://172.17.112.1:9200",
  ssl: {
    rejectUnauthorized: false, // Add this line if you're using self-signed certificates
  },
  auth: {
    username: 'admin',
    password: 'admin'
  },
});

