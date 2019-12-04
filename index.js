const express = require("express");

const server = express();

const postsRouter = require("./post/post-router");

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`IM ALIVE!`);
});

server.use("/api/posts", postsRouter);

module.exports = server;
