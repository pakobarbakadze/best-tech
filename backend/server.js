import express from "express"
import dotenv from 'dotenv'
import connectDB from "./config/connectDB.js"

import productRoutes from './routes/productRoutes.js'

dotenv.config()
connectDB()
const app = express();

app.use(express.json())

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
