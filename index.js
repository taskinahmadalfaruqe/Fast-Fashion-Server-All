const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
    res.send("Fast Feshion Server Site.");
});

// Start server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
