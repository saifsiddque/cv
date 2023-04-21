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