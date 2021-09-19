import { useEffect } from "react";
import queryString from "query-string";
import { useState } from "react";
import { useLocation } from "react-router";
import { Container } from "@chakra-ui/layout";
import ScrollToBottom from "react-scroll-to-bottom";
import io from "socket.io-client";
import In from "./In";
import Header from "./Header";
import Message from "./Message";

const socket = io("https://protected-tundra-38265.herokuapp.com/");
const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const { name, room } = queryString.parse(search);
    setName(name);
    setRoom(room);
    socket.emit("user", { name, room });
  }, [search]);
  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, [search]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("text", message);
      setMessage("");
    }
  };
  return (
    <div>
      <Header name={name} room={room} />
      <ScrollToBottom>
        {!messages.length ? (
          <p>There are no message</p>
        ) : (
          messages.map((message, i) => (
            <Container position="relative" my={4} py={4}>
              <Message key={i} message={message} name={name} />
            </Container>
          ))
        )}
      </ScrollToBottom>
      <In sendMessage={sendMessage} message={message} setMessage={setMessage} />
    </div>
  );
};

export default Chat;
