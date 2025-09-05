import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// /hola?param1=par1&param2=par2
app.get("/hola", (req, res) => {
  const params = req.query;
  res.json({
    Nombre: "Juan",
    Edad: 30,
    Ciudad: "Madrid",
    Tipo: {
      Tipo: "Negocio",
    },
    Ejemplo: "Negocio",
    telefonos: ["123-456-789", "987-654-321"],
    Hijos: [
      { Nombre: "Hijo1", Edad: 5 },
      { Nombre: "Hijo2", Edad: 7 },
      { Nombre: "Hijo3", Edad: 10 },
    ],
    Hijas: [
      { Nombre: "Hija1", Edad: 3 },
      { Nombre: "Hija2", Edad: 8 },
      { Nombre: "Hija3", Edad: 12 },
      { Nombre: "Hija4", Edad: 15 },
      { Nombre: "Hija5", Edad: 18 },
      { Nombre: "Hija6", Edad: 20 },
    ],
    parametro1: params.param1,
    parametro2: params.param2,
  });
});

app.post("/respuesta", (req, res) => {
  const request = {
    req: req.url,
    method: req.method,
    host: req.hostname,
    ip: req.ip,
    headers: req.headers,
    query: req.query,
    params: req.params,
    body: req.body,
  };
  console.log(JSON.stringify(req.body, null, 2));
  res.json(request);
});

app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
