import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Album route With GET method");
});

export default router;