export default function sendOffer(request, socket) {
    console.log('===\n\n\ntest\n\n\n===')
    console.log("socket:", socket)
  socket.emit("offer", request);
}
