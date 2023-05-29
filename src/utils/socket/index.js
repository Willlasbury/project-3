import {io} from 'socket.io-client'

export default function socketConnect  ()  {
  const socket = io("http://localhost:3000");
  socket.on("connect", () => console.log("connected", socket.id));
  socket.on("connect_error", () => {
    setTimeout(() => socket.connect(), 5000);
  });
};
