console.log({process});

const express = require("express");
const morgan = require('morgan');
require("dotenv").config();
require("./dbConnect");
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const likesRoutes = require('./routes/likesRoutes');
const booksRoutes = require('./routes/booksRoutes');
const charactersRoutes = require('./routes/charactersRoutes');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/likes', likesRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/characters', charactersRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

