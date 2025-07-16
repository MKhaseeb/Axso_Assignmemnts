import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

const HomeComponent = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [username, setUsername] = useState("");
    const [isUsernameSet, setIsUsernameSet] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {

        const storedName = localStorage.getItem("username");
        if (storedName) {
            setUsername(storedName);
            setIsUsernameSet(true);
        }


        socket.on("receiveMessage", (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off("receiveMessage");
        };
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSetUsername = () => {
        const trimmed = username.trim();
        if (trimmed.length >= 2) {
            localStorage.setItem("username", trimmed);
            setUsername(trimmed);
            setIsUsernameSet(true);
        } else {
            alert("Username must be at least 2 characters.");
        }
    };

    const sendMessage = () => {
        if (input.trim() && username) {
            const message = {
                username,
                text: input,
            };
            socket.emit("sendMessage", message);
            setInput("");
        }
    };

    if (!isUsernameSet) {
        return (
            <div style={{ maxWidth: 400, margin: "100px auto", textAlign: "center" }}>
                <h2>Enter your username</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    style={{ padding: 10, fontSize: 16, marginTop: 10 }}
                />
                <br />
                <button
                    onClick={handleSetUsername}
                    style={{
                        marginTop: 10,
                        padding: "10px 20px",
                        fontSize: 16,
                        backgroundColor: "#319795",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        cursor: "pointer",
                    }}
                >
                    Join Chat
                </button>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: 600, margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center" }}>Real-Time Chat</h1>

            <div
                style={{
                    height: 400,
                    border: "1px solid #ccc",
                    padding: 10,
                    borderRadius: 8,
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    backgroundColor: "#f9f9f9",
                }}
            >
                {messages.map((msg, index) => {
                    const isMe = msg.username === username;
                    return (
                        <div
                            key={index}
                            style={{
                                alignSelf: isMe ? "flex-start" : "flex-end",
                                backgroundColor: isMe ? "#1f75a7ff" : "#186d33ff",
                                padding: "8px 12px",
                                borderRadius: 12,
                                maxWidth: "70%",
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            <div style={{ fontWeight: "bold" }}>{msg.username}:</div>
                            <div>{msg.text}</div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                    style={{
                        flexGrow: 1,
                        padding: 8,
                        fontSize: 16,
                        borderRadius: 4,
                        border: "1px solid #ccc",
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") sendMessage();
                    }}
                />
                <button
                    onClick={sendMessage}
                    style={{
                        padding: "8px 16px",
                        fontSize: 16,
                        borderRadius: 4,
                        border: "none",
                        backgroundColor: "#319795",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default HomeComponent;
