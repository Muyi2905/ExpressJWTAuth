const express = require("express");

const app = express();
const PORT = 3000;
const jwt = require("jsonwebtoken");

app.use(express.json());

const posts = [
  {
    user1: "mave",
    title: "title 1",
  },
  {
    user1: "mavwe",
    title: "title 2",
  },
];

app.get("/posts", (req, res) => {
  try {
    res.staus(200).send(posts);
    console.log("endpoint accessed");
  } catch (error) {
    res.staus(500).json(error);
    console.error(error);
  }
});

app.post("/login", async (req, res) => {
  const username = await req.body.username;
  const user = { user: username };
  jwt.sign(user, process.env.ACCESS_SECRET_TOKEN);
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
