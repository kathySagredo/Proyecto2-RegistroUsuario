# Instrucciones cohorte 

## Registro-usuarios-react

Pasos:
1. Abrir terminal
2. npm install
3. Comado: npm run dev
4. Ingresar al navegador en ruta /registro

## Registro-usuarios-express

Pasos:
1. Abrir terminal
2. npm install
3. crear archivo .env que contenga:
 - SECRETOPRIVATEKEY = Cualquier contraseña
 - MONGO_URI = mongodb://localhost:27017/backend-users  
4. Comando: node --watch index.js

## Consejos

Si no sabes donde partir para comprender el proyecto de express, te sugiero revisar los siguientes archivos en orden:

1. index.js
2. conexion.js y app.js
3. user.routes.js
4. user.controller.js
5. user.model.js
6. generar-jwt.js (opcional)