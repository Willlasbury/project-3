export default function sayHi  (socket) {
    console.log('===\n\n\ntest\n\n\n===')
    socket.emit('test')
}