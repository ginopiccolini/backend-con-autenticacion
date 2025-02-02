require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Rutas
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

// Puerto y activación del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
