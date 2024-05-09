const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const productsRouter = require("../routes/products-route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/initial", (req, res) => {
  const { user } = req.body;
  try {
    res.status(200).json({ message: `Hello ${user}!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.use("/api/V1", productsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}...`);
});

module.exports = app;
