const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./dbConnect");
const morgan = require("morgan");
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const likesRoutes = require('./routes/likesRoutes');
const commentsRoutes = require('./routes/commentsRoutes');

const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});



app.use('/api/users', userRoutes);


app.use('/api/posts', postRoutes);


app.use('/api/likes', likesRoutes);


app.use('/api/comments', commentsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


exports.dbConnect = dbConnect;
