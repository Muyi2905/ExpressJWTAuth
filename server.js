const express = require("express");

const app = express();
const PORT = 3000;
const users = [
  {
    user1: "mave",
    title: "title 1",
  },
  {
    user1: "mave",
    title: "title 1",
  },
];

app.get("/users", (req, res) => {
  try {
    res.staus(200).send(users);
    console.log("endpoint accessed");
  } catch (error) {
    res.staus(500).json(error);
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
