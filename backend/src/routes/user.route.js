import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("User route With GET method");
});

export default router;
