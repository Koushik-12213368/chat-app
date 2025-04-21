const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth');
const Message = require('./models/Message');
const User = require('./models/User');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api', authRoutes);

mongoose.connect('mongodb+srv://chatterjeekoushik004:mJJpKlAqFWxLp0Up@cluster0.oatvcfa.mongodb.net/SocialAppProject?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) return next(new Error("Authentication error"));
  jwt.verify(token, 'secretkey', async (err, decoded) => {
    if (err) return next(new Error("Authentication error"));
    socket.user = await User.findById(decoded.id);
    next();
  });
});

io.on('connection', (socket) => {
  console.log(`${socket.user.username} connected`);

  Message.find().sort({ timestamp: 1 }).then(messages => {
    socket.emit('chat history', messages);
  });

  socket.on('chat message', async (msg) => {
    const message = new Message({ user: socket.user.username, text: msg, timestamp: new Date() });
    await message.save();
    io.emit('chat message', message);
  });

  socket.on('typing', (isTyping) => {
    socket.broadcast.emit('user-typing', { user: socket.user.username, isTyping });
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
