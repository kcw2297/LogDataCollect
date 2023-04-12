import { Client } from "@opensearch-project/opensearch";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export const client = new Client({
  // node: "https://opensearch-node1:9200",
  // node: "https://localhost:9200",
  // node: "https://172.17.112.1:9200",
  // auth: {
  //   username: "admin",
  //   password: "admin",
  // },
  node: process.env.OPENSEARCH_URL.split(","),
  auth: {
    username: process.env.OPENSEARCH_USERNAME,
    password: process.env.OPENSEARCH_PASSWORD,
  },
  ssl: {
    rejectUnauthorized: false, // Add this line if you're using self-signed certificates
  },
});
