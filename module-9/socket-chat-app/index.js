const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

const users = {};

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');
  
  socket.on('disconnect', () => {
    const username = users[socket.id];
    delete users[socket.id];
    io.emit('user_disconnected', username);
    console.log('User disconnected: ' + username);
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    const badWords = ['shit', 'fuck', 'ass', 'dick', 'pussy', 'whore'];
    
    for (const badWord of badWords) {
      if (msg.toLowerCase().includes(badWord)) {
        msg = msg.replace(badWord, '***');
      }
    }

    const username = users[socket.id];
    io.emit('chat message', { username, message: msg });
  });

  socket.on("register username", function (username) {
    users[socket.id] = username;
    io.emit("user_connected", username);
    console.log("User connected: " + username);
  });
});

server.listen(7000, () => {
  console.log('Listening on *:7000');
});
