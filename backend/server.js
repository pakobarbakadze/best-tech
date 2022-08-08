import express from "express"
import dotenv from 'dotenv'
import connectDB from "./config/connectDB.js"

import products from './data/products.js'

dotenv.config()
connectDB()
const app = express();

app.get('/', (req, res) =>{
    res.send('API is running')
})

app.get('/api/products', (req, res) =>{
    res.json(products)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
