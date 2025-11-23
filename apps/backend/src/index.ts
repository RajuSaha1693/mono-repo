import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (_req, res) => {
  res.json({ message: "Backend CI/CD Demo 🚀" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
