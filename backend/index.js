require("dotenv").config({
  path: ".env",
});
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    const db = client.db("content-management-system");
    const contentCollection = db.collection("content");
    //to get all contents
    app.get("/contents", async (req, res) => {
      const cursor = contentCollection.find({});
      const content = await cursor.toArray();
      res.send({ status: true, data: content });
    });

    //get latest content sorting by dateCreating
    app.get("/contents/latest", async (req, res) => {
      const cursor = contentCollection.find({}).sort({dateCreated: -1});
      const content = await cursor.toArray();
      res.send({ data: content });
    });
    //get older content sorting by dateCreating
    app.get("/contents/oldest", async (req, res) => {
      const cursor = contentCollection.find({}).sort({dateCreated: 1});
      const content = await cursor.toArray();
      res.send({ data: content });
    });
    //to create new content
    app.post("/content", async (req, res) => {
      const content = req.body;
      const result = await contentCollection.insertOne(content);
      res.send(result);
    });
    //to get single content
    app.get("/content/:id", async (req, res) => {
      const id = req.params.id;
      const result = await contentCollection.findOne({ _id: ObjectId(id)})
      res.send({status: true,data:result});
    });
    //to update content
    app.put("/content/:id", async (req, res) => {
      const id = req.params.id;
      const updatedContent = { $set:req.body}
      const result = await contentCollection.updateOne({ _id: ObjectId(id)}, updatedContent, { upsert: true })
      res.send(result);
    });
    //to delete a content
    app.delete("/content/:id", async (req, res) => {
      const id = req.params.id;
      const result = await contentCollection.deleteOne({ _id: ObjectId(id) });
      res.send(result);
    });
    //to get topic based content
    app.get("/content", async (req, res) => {
      const topic = req.query.topic;
      const result = await contentCollection.find({ topic: topic}).toArray()
      res.send({status: true,data:result});
    });
  } finally {
  }
};

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;