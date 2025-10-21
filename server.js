import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

// app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.use(express.json());

// Mount auth routes
app.use("/api/auth", authRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Mock backend running at http://localhost:${PORT}`);
});