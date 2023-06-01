export default function sendMessage(message, setMessage, socket) {
  if (message.trim()) {
    socket.emit("message", {
      text: message,
      name: localStorage.getItem("userName"),
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
    });
  }
  setMessage("");
}
