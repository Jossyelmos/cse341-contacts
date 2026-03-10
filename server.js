require('dotenv').config();
const express = require('express');
const connectDb = require('./db/db');
const bodyParser = require('body-parser');

const app = express();

connectDb();

app.use(express.json({ extended: false }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Contacts API" });
  });
  
app.use('/contacts', require('./routes/Contacts'));
app.use('/api/contactModel', require('./Api/contacts'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on " + port));