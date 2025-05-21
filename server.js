
    const express = require('express');
    const path = require('path');

    const app = express();
    const server = require('http').createServer(app);
    const io = require('socket.io')(server);

    app.use(express.static(path.join(__dirname, 'public')));
    
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    let messages = [];

    io.on('connection', (socket) => {
    console.log(`Um usuário se conectou: ${socket.id}`);

    socket.emit('previousMessages', messages);

    socket.on('sendMessage', data => {
        messages.push(data);
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log(`Usuário desconectado: ${socket.id}`);
    });
});



    server.listen(3001, () => {
        console.log('Servidor rodando em http://localhost:3001');
    });