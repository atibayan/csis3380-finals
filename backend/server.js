require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;


const uri = process.env.mongodb_repo
mongoose.connect(uri).then(()=> console.log(`Successfully connected to database`))

const booklistSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String}
})

const booklistModel = mongoose.model('BookList', booklistSchema)

app.get('/', async (req, res)=>{
    await booklistModel.find().then((results)=>{
        console.log(results)
        res.send(results)
    }).catch((err)=>{
        console.log(err)
        res.status(500).send(`Error in database`)
    })
})

app.get('/:id', async(req,res)=>{
    console.log(req.params.id)
    await booklistModel.find({_id: req.params.id}).then((results)=>{
        console.log(results)
        if (results.length == 0) res.send(`No book found with id: ${req.params.id}`)
        else res.send(results)
    }).catch((err)=>{
        console.log(err)
        res.status(500).send(`Error in database`)
    })
})

app.post('/', async (req, res)=>{
    console.log(req.body)
    await booklistModel.create(req.body).then((results) =>{
        console.log(results)
        res.send(results)
    }).catch((err)=>{
        console.log(err)
        res.status(500).send(`Error in database`)
    })
})

app.post('/:id', async(req, res)=>{
    console.log(req.params.id)
    await booklistModel.findOneAndUpdate(
        {_id: req.params.id}, req.body).then((results)=>{
            console.log(results)
            res.send(results)
        }).catch((err)=>{
            console.log(err)
            res.status(500).send(`Error in database`)
        })
})

app.delete('/:id', async(req, res) => {
    console.log(req.params.id)
    await booklistModel.deleteOne({_id: req.params.id}).then((results)=>{
        console.log(results)
        res.send()
    }).catch((err)=>{
        console.log(err)
        res.status(500).send(`Error in database`)
    })
})

app.listen(port, (err)=>{
    if(err) console.log(err)
    else console.log(`Listening on port ${port}`)
})