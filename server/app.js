import express from "express";
const app = express();
const port = 3000;


import authRouter from "./routes/authRouter.js";

//parent route
app.use ("/api/v1/auth", authRouter);

// server
app.listen(port, () => {
  console.log(`Aplikasi Berjalan di port ${port}`);
});
