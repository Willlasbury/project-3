import React from 'react'
import {io} from 'socket.io-client'
const App= ()=> {
  const [time, setTime] = React.useState('fetching')  
  React.useEffect(()=>{
    const socket = io('http://localhost:3000')
    console.log('===\n\n\ntest\n\n\n===')
    socket.on('connect', ()=>console.log(socket.id))
    socket.on('connect_error', ()=>{
      setTimeout(()=>socket.connect(),5000)
    })
   socket.on('time', (data)=>setTime(data))
   socket.on('disconnect',()=>setTime('server disconnected'))
 
 },[])
 return (
     <div className="App">
       <p>test</p>
     {time}
   </div>
 )
}
export default App;