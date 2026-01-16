import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Auth route With GET method");
});

export default router;