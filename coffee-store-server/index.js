require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 3002;
const { MongoClient, ServerApiVersion } = require('mongodb');

// to use from the different origin/port
app.use(cors());

// to parse json body data
app.use(express.json());


// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.bberrop.mongodb.net/?appName=Cluster0";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bberrop.mongodb.net/?appName=Cluster0`;
// console.log(process.env.DB_USER);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const coffeeCollection = client.db('coffeeDB').collection('coffees');

        // create an api for coffee data
        app.post('/coffees', async (req, res) => {
            const newCoffee = req.body;
            console.log(newCoffee);
            const result = await coffeeCollection.insertOne(newCoffee);
            res.send(result);
        });

        app.get('/coffees', async (req, res) => {
            const cursor = coffeeCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello from Coffee Store Server');
});

app.listen(port, () => {
    console.log(`Coffee Store Server is running port: ${port}`);
});

