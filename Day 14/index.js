// install: npm install mongodb
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://ankuranandaunta:SnHprVNkmuHuGkFj@cluster2.1tsifkr.mongodb.net/College?retryWrites=true&w=majority&appName=Cluster2"; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB");

    const db = client.db("myDatabase");  // create/use database
    const collection = db.collection(); // create/use collection

    // Insert a sample document
    const result = await collection.insertOne({ name: "Ankur", age: 21 });
    console.log("Inserted:", result.insertedId);

    // Fetch documents
    const users = await collection.find().toArray();
    console.log("Users:", users);

  } catch (err) {
    console.error("❌ Connection failed", err);
  } finally {
    await client.close();
  }
}

run();