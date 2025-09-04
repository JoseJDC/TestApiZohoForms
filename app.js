import express from "express";

const app = express();

// /hola?nombre=Alguien&apellido=Apellido
app.get("/hola", (req, res) => {
  const params = req.query;
  res.send("Hola: " + params.nombre + " " + params.apellido);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
