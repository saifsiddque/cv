const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000 ;

//middle ware 
app.use(cors())
app.use(express.json())

//user: dbuserassig
//password: Pcmb5QZVboNCvCAv 

const uri = "mongodb+srv://dbuserassig:Pcmb5QZVboNCvCAv@cluster0.nyumefd.mongodb.net/?retryWrites=true&w=majority";

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
      const bookingsCollection = client.db('assignment-12').collection('bookingsCollection')
      const usersCollection = client.db('assignment-12').collection('users')
      const cvCollection = client.db('cvMaker').collection('cvInfos')
     

      
     




      
    //   app.put('/products/:id' , async(req, res)=>{
    //     const id = req.params.id;
    //     const filter = {_id: ObjectId(id)};
    //     const options = {upsert: true}
    //     const updatedStatus = {
    //       $set: {
    //         status: 'advertise'
    //       }
    //     }
    //     const result = await productsCollection.updateOne(filter, updatedStatus, options);
    //     res.send(result);
    //   })
      app.post('/cvInfos', async(req, res)=>{
        const cvInfos = req.body
        const result = await cvCollection.insertOne(cvInfos)
        console.log(result)
        res.send(result)
      })
      app.get('/cvInfos/:number', async(req, res)=>{
        const number = req.params.number;
        console.log(number)
        const query = {phoneNumber: number};
        const information = await cvCollection.findOne(query);
        res.send(information);

      })
      
    //   app.delete('/products/:id', async(req, res)=>{
    //     const id = req.params.id;
    //     const query = {_id: ObjectId(id)};
    //     const result = await productsCollection.deleteOne(query)
    //     console.log(result);
    //     res.send(result)
    //   })

    //   app.get('/products', async(req, res)=>{
    //     console.log(req.query);
    //     let query = {};
    //     if(req.query.category){
    //       query = {
    //         category : req.query.category
    //       }
    //     }
    //     if(req.query.email){
    //       query = {
    //         email : req.query.email
    //       }
    //     }
    //     if(req.query.status){
    //       query = {
    //         status : req.query.status
    //       }
    //     }
    //     const cursor = productsCollection.find(query);
    //     const product = await cursor.toArray();
    //     res.send(product);
    //   });


      
      
    } 
    finally {
    }
  }
  run().catch(err => console.log(err));

  



app.get( '/' , (req , res) =>{
    res.send('AllhamDulillah Server is Running')
});

app.listen(port, () =>{
    console.log(` Server Running On Poort ${port}`);
} )