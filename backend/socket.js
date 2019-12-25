const WebSocket = require("ws");
const port = 5000;
const server = new WebSocket.Server({ port });

server.on("connection", ws => {
  ws.on("message", message => {
    if (message === 'exit'){
      ws.close()
    } else {
      server.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    }
  });
  ws.send("Welcome");
});