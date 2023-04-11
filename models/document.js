import {client} from "./opensearch.js"

const indexName = 'myindex';
const typeName = 'mytype';


export async function create(data){
    const response = await client.index({
        index: indexName,
        type: typeName,
        body: data
    });
    return response;
}
