// test function to check if socket was working

export default function sayHi  (socket) {
    socket.emit('Hi')
}