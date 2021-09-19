import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import { userJoin, getUser, userDisconnect } from "./users.js";

const app = express();
app.use(cors());

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("socket has connect");
  socket.on("user", ({ name, room }) => {
    const user = userJoin(socket.id, name, room);
    socket.join(user.room);
    socket.emit("message", {
      id: user.id,
      name: user.name,
      text: `Selamat Datang ${user.name} di grup ${user.room}`,
    });
    socket.broadcast.to(user.room).emit("message", {
      id: user.id,
      name: user.name,
      text: `${user.name} telah bergabung`,
    });
  });
  socket.on("text", (text) => {
    const user = getUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        id: user.id,
        name: user.name,
        text,
      });
    }
  });
  socket.on("disconnect", () => {
    console.log("socket has disconnect");
    const user = userDisconnect(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        id: user.id,
        name: user.name,
        text: `${user.name} telah meninggalkan grup`,
      });
    }
  });
});
httpServer.listen(5000, () => console.log("server has started"));
