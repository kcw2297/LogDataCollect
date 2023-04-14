import { Client } from "@opensearch-project/opensearch";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export const client = new Client({
  // [Info] Development Code - Uncomment if you are on development
  node: "https://localhost:9200",
  auth: {
    username: "admin",
    password: "admin",
  },
  // [Info] Docker image - Uncomment if you are on production
  // node: process.env.OPENSEARCH_URL.split(","),
  // auth: {
  //   username: process.env.OPENSEARCH_USERNAME,
  //   password: process.env.OPENSEARCH_PASSWORD,
  // },
  // ssl: {
  //   rejectUnauthorized: false, // Add this line if you're using self-signed certificates
  // },
});
