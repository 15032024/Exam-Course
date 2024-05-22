const express = require('express')
const mongoose = require('mongoose');

const app = express()
const PORT = 5000
const BASE_URL = "mongodb+srv://Course:course123@cluster0.tpj5fn4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const cors = require('cors')
app.use(cors())


const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    title: { type: String, require: true},
    price: { type: Number, require: true },
    imageUrl: { type: String, require: true },
    profileImage: { type: String, require: true },
    profileName: { type: String, require: true },
    desc: { type: String, require: true },
  
  });

  const courseModel = mongoose.model('Course', CourseSchema);


app.get('/api/products', async (req, res) => {
try {
    const allproduct = await courseModel.find({})
    if (allproduct.length>0) {
        res.status(200).send({message: "successful", data: allproduct})
    }else{
        res.status(204).send({message:"data is empty"})
    }

} catch (error) {
    res.status(500).send({message: error.message})
}

})
app.get('/api/products/:id',async (req, res) => {
const {id}= req.params;
try {
    const productById = await courseModel.findById({})
    if (productById) {
        res.status(200).send({message:"successfuly", data: productById})
    }else{
        res.status(204).send({message:"data is not found"})
    }

} catch (error) {
    res.status(500).send({message: error.message})

}

})
app.delete('/',async (req, res) => {
    const {id} = req.params;

    try {
        const deletedProduct = await courseModel.findByIdAndDelete({})
        
        if (deletedProduct) {
            res.status(200).send({message:"Product deleted"})
        }else{
            res.status(204).send({message:"data is not found for deleted"})
        }
        
    } catch (error) {
            res.status(500).send({message: error.message})

    }

})
app.post('/api/products',async (req, res) => {
    try {
        const newProduct = await courseModel({...req.body})
        newProduct.save()
        res.status(200).send({message:"New Product added", newProduct})

    } catch (error) {
            res.status(500).send({message: error.message})

    }

})




mongoose.connect(BASE_URL)
  .then(() =>{ console.log('Connected!')

  app.listen(PORT, () => {
    console.log(`Example app  http://localhost:${PORT}`)
  })
  });