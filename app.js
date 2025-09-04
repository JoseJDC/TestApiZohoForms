import express from "express";

const app = express();

// /hola?param1=par1&param2=par2
app.get("/hola", (req, res) => {
  const params = req.query;
  res.json({ message: "Hola", param1: params.param1, param2: params.param2 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
