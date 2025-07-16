const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const app = express();
const server = require('http').createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

require('dotenv').config();
require('../server/config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('../server/routes/product.routes')(app);

io.on('connection', (socket) => {
  console.log('a user connected');
  console.log("Nice to meet you. (shake hand)")
  console.log(socket.id);
  
socket.emit('Welcome', { message: 'Welcome to the server!' });

   socket.on("event_from_client" , data =>{
        socket.broadcast.emit("send_data_to_all_other_clients" , data)
    })

});

server.listen(8000, () => {
    console.log("Listening at Port 8000")
})

