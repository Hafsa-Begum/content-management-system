require("dotenv").config();
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

    app.get("/contents", async (req, res) => {
      const cursor = contentCollection.find({});
      const content = await cursor.toArray();

      res.send({ status: true, data: content });
    });

    app.post("/content", async (req, res) => {
      const content = req.body;

      const result = await contentCollection.insertOne(content);

      res.send(result);
    });

    app.delete("/content/:id", async (req, res) => {
      const id = req.params.id;

      const result = await contentCollection.deleteOne({ _id: ObjectId(id) });
      res.send(result);
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
