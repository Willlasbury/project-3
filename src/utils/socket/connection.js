import {io} from 'socket.io-client'

// create connection to socket at server 
export default function socketConnect  (token)  {

  // change this to match your server location
  // local server
  const SERVER = process.env.REACT_APP_SERVER_URL
  
  // deployed server
  // const SERVER = "https://traderz-post.herokuapp.com"

  // get socket
  const socket = io(SERVER);

  // display whether you are connected
  socket.on("connect", () => console.log("connected", socket.id));
  socket.on("connect_error", () => {
    setTimeout(() => socket.connect(), 10 * 1000);
  });
  if (token) {
    socket.emit('add_user', token)
  }
  // send out socket to use in other funcitons
  return socket
};
