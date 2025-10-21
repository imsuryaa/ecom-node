import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

// Mount auth routes
app.use("/api/auth", authRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Mock backend running at http://localhost:${PORT}`);
});