import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from "public"
app.use(express.static(path.join(__dirname, "../public")));

// Serve the dist folder at /dist route
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// (Optional) Ensure index.html is served at root
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
