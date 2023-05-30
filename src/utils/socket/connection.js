import {io} from 'socket.io-client'

// create connection to socket at server 
export default function socketConnect  ()  {

  // change this to match your server location
  // local server
  // const SERVER = "http://localhost:3000"
  
  // deployed server
  const SERVER = "https://git.heroku.com/traderz-post.git"

  // get socket
  const socket = io(SERVER);

  // display whether you are connected
  socket.on("connect", () => console.log("connected", socket.id));
  socket.on("connect_error", () => {
    setTimeout(() => socket.connect(), 5000);
  });

  // send out socket to use in other funcitons
  return socket
  
};
