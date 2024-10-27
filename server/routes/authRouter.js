import express from "express";

const router = express.Router();

//post /api/v1/auth/register
router.post("/register", (req, res) => {
  res.send("Register");
});

//get /api/v1/auth/login
router.get("/login", (req, res) => {
  res.send("Login");
});

//get /api/v1/auth/getUser
router.post("/getUser", (req, res) => {
  res.send("Get Current User");
});

export default router;
