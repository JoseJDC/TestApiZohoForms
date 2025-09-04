import express from "express";

const app = express();

// /hola?param1=par1&param2=par2
app.get("/hola", (req, res) => {
  const params = req.query;
  res.json({
    Nombre: "Juan",
    Edad: 30,
    Ciudad: "Madrid",
    telefonos: ["123-456-789", "987-654-321"],
    Hijos: [
      { Nombre: "Hijo1", Edad: 5 },
      { Nombre: "Hijo2", Edad: 7 },
      { Nombre: "Hijo3", Edad: 10 },
    ],
    parametro1: params.param1,
    parametro2: params.param2,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
