import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// __filename ба __dirname тодорхойлох
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Статик файлуудыг serve хийх
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
