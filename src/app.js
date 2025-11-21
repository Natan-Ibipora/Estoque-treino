const express = require("express");
const produtoRoutes = require("./routes/produtoRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/produtos", produtoRoutes);

module.exports = app;
