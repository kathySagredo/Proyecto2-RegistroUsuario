// Se importa el módulo express, que es un framework web de Node.js utilizado para crear aplicaciones web y APIs. Marco de trabajo que nos permite levantar el servidor. 
// Se importa el módulo morgan, que es un middleware para Express utilizado para registrar solicitudes HTTP en la consola. Libreria que da un registro de solicitudes http.
// Cors: Paquete que nos permite permitir o restringir accesos de dominios externos.
// Se importa el módulo user.routes desde el directorio "../routes". Archivo que define las rutas relacionadas con los usuarios en la aplicación.
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('../routes/user.routes.js')


// Se crea una instancia de la aplicación Express, que se almacenará en la variable app. Esta instancia se utiliza para configurar y ejecutar la aplicación web.
const app = express();
app.use(cors()) // Permite a otros sitios web hacer solicitudes a nuestra aplicación (esto es lo que hace cors).

//Se configuran varios middleware en la aplicación Express utilizando el método app.use().
//Los middleware son funciones que se ejecutan en el orden en que se definen y se utilizan para procesar las solicitudes HTTP antes de que lleguen a las rutas.
app.use(morgan('dev')); //morgan('dev') se utiliza para registrar las solicitudes HTTP en la consola en un formato "dev". Esto es útil para el registro y el seguimiento de las solicitudes entrantes, indicando que es un entorno de desarrollo.
app.use(express.json()); // express.json() es un middleware que analiza el cuerpo de las solicitudes con formato JSON. Esto permite que la aplicación procese datos JSON en las solicitudes entrantes. Permite a express entender las peticiones que vienen en formato json, es necesario este middleware para que pueda traducirlo e interpretarlo. 
app.use(express.urlencoded({extended: true})); //express.urlencoded({ extended: true }) es un middleware que analiza los datos codificados en la URL de las solicitudes. Nos permite decodificar los parametros que vienen dentro de la url. El parámetro extended se establece en true, lo que permite analizar objetos y arreglos en lugar de solo cadenas de texto.

// Se utiliza el método app.use() para montar un enrutador (router) en la aplicación. El enrutador contiene definiciones de rutas relacionadas con las operaciones de usuario, como registrar usuarios, iniciar sesión, obtener información del usuario, etc.
// El enrutador se monta en el prefijo de ruta "/api/v1". Esto significa que todas las rutas definidas en el enrutador se deben acceder a través de "/api/v1" en la URL. Por ejemplo, "/api/v1/usuarios" podría ser una ruta manejada por el enrutador.
app.use("/api/v1", router );
// Se define una ruta de manejo de errores para todas las solicitudes que no coinciden con ninguna de las rutas definidas en el enrutador. En otras palabras, si ninguna de las rutas coincide con la solicitud, esta función se ejecutará y responderá con un código de estado 404 (Not Found) y un mensaje de texto que indica que la ruta no se encontró.
app.use('*', (req, res) => res.status(404).send("404 - Ruta no encontrada"))

//Finalmente, la instancia de la aplicación Express se exporta para que pueda ser utilizada desde otros archivos, como el punto de entrada principal de la aplicación.
module.exports = app;