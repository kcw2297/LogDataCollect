import {create} from "../models/document"


export async function createDocument(req, res) {
    try {
      const data = req.body;
      const response = await create(data);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
