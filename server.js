const express = require("express");
require("dotenv").config();
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

app.get("/posts", authenticateToken, (req, res) => {
  try {
    res.status(200).send(posts);
    console.log("endpoint accessed");
  } catch (error) {
    res.staus(500).json(error);
    console.error(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username } = req.body;
    const accessToken = jwt.sign(
      { user: username },
      process.env.ACCESS_SECRET_TOKEN
    );
    res.json({ accessToken: accessToken });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.error(error);
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader;
  if (token == null) return res.status(401);

  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, user) => {
    if (err) return res.status(403);
    req.user = user;
    next();
  });
}

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
