import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload"
import path from "path"
import { clerkClient, clerkMiddleware, getAuth } from '@clerk/express'
import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songsRoutes from "./routes/songs.route.js";
import albumRoutes from "./routes/album.route.js";
import statsRoutes from "./routes/stats.route.js";
import cors from "cors"

dotenv.config();
const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json()); // to parse req.body json data

app.use(clerkMiddleware());  // this will add auth to req obj => req.auth
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: path.join(__dirname, "tmp"),
  createParentPath: true,
  limits: {
    fileSize: 10 * 1024 * 1024
  }
}))

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songsRoutes);
app.use("/api/album", albumRoutes);
app.use("/api/stats", statsRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: process.env.NODE_ENV === "production" ? "internal server error" : err.message })

})

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
  connectDB();
});
