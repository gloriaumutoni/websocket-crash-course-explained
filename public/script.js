// console.log(io)
//io() connects to the socket.io server at the url
const socket=io('http://localhost:4000')
socket.on('event',data=>{
    console.log(data)
    socket.emit('thankyou',[4,5,6])
})