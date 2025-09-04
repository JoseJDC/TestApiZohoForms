import express from "express";

const app = express();

// /hola?param1=par1&param2=par2
app.get("/hola", (req, res) => {
  const params = req.query;
  res.json({
    message: "Hola",
    subObject: { nestedParam: "nestedValue" },
    subObject2: { nestedParam2: "nestedValue2" },
    subArray: [1, 2, 3, 4],
    subArray2: ["a", "b", "c", "d"],
    param1: params.param1,
    param2: params.param2,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
