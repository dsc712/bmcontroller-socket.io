var io;
module.exports = (_io) => {
    io = _io;
    bindEvents();

}


const bindEvents = () => {
    io.on('connection' ,onConnect);
}


const onConnect = socket => {
    console.log('Connected client', socket.id);


    io.of('/admin').emit('new connection', socket.id);
}
