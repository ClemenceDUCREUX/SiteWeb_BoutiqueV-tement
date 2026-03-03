const express = require("express");
const path = require("path");

const app = express();

// Serve the static frontend
const frontendPath = path.join(__dirname, "..", "frontend");
app.use(express.static(frontendPath));

// Root -> frontend index.html (redirects to the actual home page)
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// (Optional) 404 fallback
app.use((req, res) => {
  res.status(404).send("404 - Page not found");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
