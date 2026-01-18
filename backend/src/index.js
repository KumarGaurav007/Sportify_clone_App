import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songsRoutes from "./routes/songs.route.js";
import albumRoutes from "./routes/album.route.js";
import statsRoutes from "./routes/stats.route.js";

dotenv.config();

const app = express();
app.use(express.json()); // to parse req.body json data



const PORT = process.env.PORT || 5000;

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songsRoutes);
app.use("/api/album", albumRoutes);
app.use("/api/stats", statsRoutes);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
  connectDB();
});
