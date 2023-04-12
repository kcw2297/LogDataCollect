import { client } from "./opensearch.js";

const indexName = "ecommerce";

const query = {
  query: {
    match: {
      customer_first_name: "Soyna",
    },
  },
};

export async function search() {
  try {
    const response = await client.search({
      index: indexName,
      body: query,
    });
    return response;
  } catch (e) {
    return { error: `${e}` };
  }
}

export async function create(data) {
  const response = await client.index({
    index: indexName,
    body: data,
  });
  return response;
}
