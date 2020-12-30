import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on : http://localhost:${PORT}`);
};
function handleHome(req, res) {
  res.send("Hello from home");
}

app.get("/", handleHome);

app.listen(4000, handleListening);