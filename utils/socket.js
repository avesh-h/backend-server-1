const io = require("socket.io");

const socketConnections = (server) => {
  const socket = io(server, {
    cors: {
      origin: ["http://localhost:3000"],
      allowedHeaders: ["my-custom-header"],
      credentials: true,
    },
  });
};
