const users = []

export default function joinRoom ({id, username, room, socket}) {
    const user = {id, username, room}

    users.push(user)

    socket.join(user.room)

    socket.emit("message")
} 