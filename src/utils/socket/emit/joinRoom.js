export default function joinRoom ({id, userName, room, socket}) {
    const user = {id, userName, room}

    users.push(user)

    socket.join(user.room)

    socket.emit("message")
} 