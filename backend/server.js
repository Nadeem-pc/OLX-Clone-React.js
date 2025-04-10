const express = require('express');
const cors = require('cors');
const env = require('dotenv').config()
const connectDb = require('./config/db');
const productRoutes = require('./routes/productRoutes')

connectDb()

const app = express();

app.use(cors({ 
    origin: "http://localhost:5173", 
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products',productRoutes)
app.use('/uploads', express.static('uploads'));

app.get('/' ,(req, res) => {
    res.send('API is Running')
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  