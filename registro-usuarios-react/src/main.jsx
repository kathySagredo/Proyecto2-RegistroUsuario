import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

/* ReactDOM.createRoot se utiliza para crear un "punto de entrada" en el HTML donde se mostrará tu aplicación React. */
/* document.getElementById('root') busca un elemento en tu archivo HTML con el ID root, que es donde tu aplicación será renderizada (mostrada). */
ReactDOM.createRoot(document.getElementById('root')).render( /* .render(...): Este método render se usa para mostrar lo que se pasa dentro de él en el navegador. */
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>,
)
/* <React.StrictMode>: Este es un componente de React que envuelve tu aplicación para ayudarte a identificar problemas potenciales en tu código. No afecta cómo se ve la aplicación, pero ayuda a los desarrolladores a escribir mejores aplicaciones.*/
/* <App />: Esto representa tu componente App. Es como decir "muestra el contenido de App aquí". App es tu componente principal que puede contener otros componentes y la lógica de tu aplicación. */
