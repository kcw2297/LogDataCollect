import {create, search} from "../models/document.js"

  
export async function searchDocument(req, res){
  try{
    const response = await search();
    // res.json(response);
    res.send(response);
  } catch(error){
    console.log(`Error in searchDocument : ${error}`);
    res.status(404).json({error: error.message});
  }
}


export async function createDocument(req, res) {
  try {
    const data = req.body;
    const response = await create(data);
    // res.json(response);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}