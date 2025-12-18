const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 3002;

// to use from the different origin/port
app.use(cors());

// to parse json body data
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Coffee Store Server');
});

app.listen(port, () => {
    console.log(`Coffee Store Server is running on port: ${port}`);
})