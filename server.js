const express = require("express");
<<<<<<< HEAD
require("dotenv");
const app = express();
const PORT = 3000;
const jwt = require("jsonwebtoken");

app.use(express.json());

const posts = [
=======

const app = express;
const PORT = 3000;
const users = [
>>>>>>> setup-branch
  {
    user1: "mave",
    title: "title 1",
  },
  {
<<<<<<< HEAD
    user1: "mavwe",
    title: "title 2",
  },
];

app.get("/posts", (req, res) => {
  try {
    res.status(200).send(posts);
=======
    user1: "mave",
    title: "title 1",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
  try {
    res.staus(200);
>>>>>>> setup-branch
    console.log("endpoint accessed");
  } catch (error) {
    res.staus(500).json(error);
    console.error(error);
  }
});

<<<<<<< HEAD
app.post("/login", async (req, res) => {
  const username = await req.body.username;
  const user = { user: username };
  jwt.sign(user, process.env.ACCESS_SECRET_TOKEN);
  res.json({ accessToken: accessToken });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
=======
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
>>>>>>> setup-branch
});
