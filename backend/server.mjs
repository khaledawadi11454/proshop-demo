// const products = require('./data/products.js');
// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from '../backend/middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
const port = 8004 || process.env.PORT;
const app = express();
connectDB(); // connect to MongoDB
app.get('/', (req,res) => {
    
res.send('API is running ...')
});

app.use('/api/products',productRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port ,() => console.log(`Server running on port : ${port}`)); 
 