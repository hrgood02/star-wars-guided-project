import express from 'express';
import { MongoClient } from 'mongodb';



var url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "swapi";

const app = express();

app.use(express.json());



app.all("*", (req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/api/characters", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('characters');
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.get("/api/films", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('films');
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.get("/api/planets", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('planets');
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// app.get("/api/characters/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const collection = db.collection('characters');
//     const data = await collection.findOne({'id': +id});
//     client.close();
//     if(data) {
//       res.json(data);
//     } else {
//       res.status(404).json({message: 'Character not found'});
//     }
//   } catch (error) {
//     res.status(500).json({error: error});
//   }
// });



const port = 3500;
client.close();
app.listen(port, () => console.log(`Listening on port ${port}.`));