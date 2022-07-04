const express = require("express");
const app = express();

const posts = [
	{ username: "Mike", post: "this is post 1" },
	{ username: "Jim", post: "this is post 2" },
];

app.get("/posts", (req, res) => {
	res.json(posts);
});

app.get("/login", (req, res) => {
	res.send("<h1>Login</h1>");
});

app.listen(3000);
