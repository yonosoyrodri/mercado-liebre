const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3333;

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./view/home.html"));
});

app.get("/login.html", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./view/login.html"));
});

app.post("/login.html", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./view/home.html"));
});

app.get("/registro.html", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./view/registro.html"));
});

app.post("/registro.html", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./view/home.html"));
});

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
