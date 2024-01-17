const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const url = process.env.Mongo_URL;
const PORT = process.env.PORT | 5000;
const routes = require('./routes/TaskRoute')
app.use(express.json());
app.use(cors());

mongoose.connect(url)
.then(()=> console.log('connected to MongoDB'))
.catch((err)=>console.log('err:',err));

app.use(routes);
app.get('/',(req,res)=>{
    res.send('Welcome to homepage');
})
app.listen(PORT,()=>{
    console.log(`Server running on port:${PORT}`);
})
