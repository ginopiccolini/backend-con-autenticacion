const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { swaggerUi, specs } = require("./swagger"); // Importamos la configuración de Swagger

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());  // Habilitar CORS
app.use(express.json());  // Parsear el cuerpo de las solicitudes como JSON

// Conectar a MongoDB usando la URI desde las variables de entorno
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.log("Error al conectar a MongoDB: ", err));

// Rutas de la API
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

// Usar Swagger UI para documentar los endpoints
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Usar las rutas definidas en los archivos de rutas
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

// Configurar el puerto de la aplicación
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
