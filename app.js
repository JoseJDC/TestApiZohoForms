import express from "express";

const app = express();

// /hola?param1=par1&param2=par2
app.get("/hola", (req, res) => {
  const params = req.query;
  const exampleObject = { nestedParam: "nestedValue" };
  const exampleArray = [1, 2, 3, 4];
  res.json({
    message: "Hola",
    subObject: exampleObject,
    subObjectWithArray: { nestedParam: "nestedValue2", array: exampleArray },
    subArray: exampleArray,
    subArrayOfObjects: [
      { obj1Param: "obj1Value" },
      { obj2Param: "obj2Value" },
      { obj3Param: "obj3Value" },
    ],
    param1: params.param1,
    param2: params.param2,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
