# Backend con Autenticación y Autorización

Este proyecto es una API backend que implementa autenticación y autorización de usuarios con JWT y operaciones CRUD para un modelo de "Producto", utilizando MongoDB y Mongoose. La API también está documentada con Swagger.

## Características

- Autenticación de usuarios con JWT.
- Operaciones CRUD para productos.
- Documentación de la API con Swagger.
- Base de datos en MongoDB Atlas.

## Requisitos

- Node.js (v14 o superior)
- MongoDB Atlas
- Postman o cualquier cliente HTTP para probar la API.

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/backend-con-autenticacion.git
Instalar las dependencias:

bash
Copiar
Editar
cd backend-con-autenticacion
npm install
Configurar el archivo .env con las siguientes variables:

bash
Copiar
Editar
PORT=5000
MONGO_URI=<MongoDB Atlas URI>
JWT_SECRET=<clave_secreta>
Ejecutar el servidor:

bash
Copiar
Editar
npm start
El servidor estará disponible en http://localhost:5000.

Rutas de la API
Usuario
Registrar: POST /api/user/register
Iniciar sesión: POST /api/user/login
Verificar token: GET /api/user/verifytoken
Actualizar usuario: PUT /api/user/update
Producto
Crear producto: POST /api/product/create
Leer productos: GET /api/product/readall
Leer producto: GET /api/product/readone/:id
Actualizar producto: PUT /api/product/update/:id
Eliminar producto: DELETE /api/product/delete/:id
Documentación
La documentación interactiva está disponible en Swagger en:

bash
Copiar
Editar
http://localhost:5000/api-docs
Despliegue
El proyecto puede ser desplegado en Render.com y la base de datos está en MongoDB Atlas.

Este archivo ofrece un resumen conciso sobre cómo instalar, configurar y utilizar el backend con las rutas de la API disponibles.

Copiar
Editar

Este formato es más directo, sin detalles excesivos, y elimina la personalización que podría dar la impresió
