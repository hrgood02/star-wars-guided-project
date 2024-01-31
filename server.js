import express from 'express';


const app = express();

app.use(express.json());

app.all("*", (req, res, next) => {
    console.log(req.url);
    next();
  });

  app.get("/api/planets", async (req, res) => {
    let planet = [{size: 15}];
    if (planet === undefined){
        res.statusCode= 404;
        res.end();
    } else{
        res.send(planet);
    }
});
    // try {

    //   const client = await MongoClient.connect('mongodb://localhost:27017');
    //   const db = client.db('swapiDB');
    //   const collection = db.collection('swapiCollection');
    //   const swapi = await collection.find().toArray();
    //   client.close();
    //   res.json(swapi);
    // } catch (error) {
    //   res.status(500).json({error: error});
//   });



const port = 3500;
app.listen(port, () => console.log(`Listening on port ${port}.`));