const express=require('express')
const socketio=require('socket.io')
const app= express()
  //serve public files statically
app.use(express.static('public'))
const esxpressServer=app.listen(4000)
const io=socketio(esxpressServer,{})
io.on('connect',socket=>{
    console.log(socket.id,'has joined our server')
    socket.emit('event',[1,2,3])
    socket.on('thankyou',data=>{
      console.log('the data is',data)
    })
})

 