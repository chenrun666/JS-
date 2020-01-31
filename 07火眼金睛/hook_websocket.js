webSocket.prototype.senda = WebSocket.prototype.send;
webSocket.prototype.send = function(data) {
    console.log('Hook WebSocket', data);
    return this.senda(data)
}