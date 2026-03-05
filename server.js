require('dotenv').config();
const express = require('express');
const connectDb = require('./db/db');
const bodyParser = require('body-parser');

const app = express();

connectDb();

app.use(express.json({ extended: false }));
app.use('/contacts', require('./routes/Contacts'));
app.use('/api/contactModel', require('./Api/contacts'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on " + port));