require('dotenv').config();
const express = require('express')
const cors = require('cors');
const { run } = require('./mongoDB');
const parcelsAPI = require('./parcelsAPI');
const paymentAPI = require('./paymentAPI');
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('ZapShift Server Running')
})

// Setup API routes
parcelsAPI(app);
paymentAPI(app);

// Wait for MongoDB to connect, then start the server
run().then(() => {
    app.listen(port, () => {
        console.log(`Zapshift Server app listening on port ${port}`)
    })
}).catch(console.dir)
