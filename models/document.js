import {client} from "./opensearch.js"

const indexName = 'ecommerce';

const query = {
    query: {
        match:{
            customer_first_name : "Soyna"
        }
    }
}

export async function search(){
    console.log(`[분석][cleint]client:` ,client);
    try {
    const response = await client.count({
        index : indexName,
        //body : query
    });
    console.log('count',response)
    return response;
} catch(e) { console.log('Error',e); return {};
}
}


export async function create(data){
    const response = await client.index({
        index: indexName,
        body: data
    });
    return response;
}


