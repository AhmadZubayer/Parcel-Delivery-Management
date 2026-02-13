const { ObjectId } = require('mongodb');
const { parcelColl } = require('./mongoDB');

module.exports = function(app) {
    app.get('/parcels', async(req, res) => {
        const query ={}
        const {email} = req.query;
        if(email){query.senderEmail = email}
        const cursor = parcelColl.find(query);
        const result = await cursor.toArray();
        res.send(result);
    })
    
    app.post('/parcels', async(req, res) => {
        const parcel = req.body;
          parcel.createdAt = new Date();
        const result = await parcelColl.insertOne(parcel);
        res.send(result);
    })

    app.delete('/parcels/:id', async(req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await parcelColl.deleteOne(query);
        res.send(result);
    })
}