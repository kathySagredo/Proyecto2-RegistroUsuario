/* useState y useEffect: Estos son lo que llamamos "hooks" en React.
useState: Te permite agregar "estado" a un componente. Piensa en el estado como en la memoria de corto plazo de tu componente: es donde guarda información que puede cambiar con el tiempo.
useEffect: Te permite ejecutar código adicional en momentos específicos del ciclo de vida de un componente. Es útil para hacer cosas como traer datos de un servidor cuando el componente se muestra por primera vez.*/

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
    // Obtén la función de navegación proporcionada por react-router-dom  
    const navigate = useNavigate();
    // Estado local para el nombre, apellido, correo electrónico, contraseña para indicar si el usuario fue creado
    const [name, setName] = useState("");   /* useState(""): Aquí estamos declarando una variable de estado llamada name y una función para actualizarla llamada setName. */
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userCreate, setUserCreate] = useState(false);

    // Funciones para manejar cambios en los campos de entrada
    const handleName = (e) => { // El evento que escucha corresponde a la escritura en el input
        // e = evento // target = input // value = el valor del input del nombre
        setName(e.target.value); // Se actualiza el estado name (setName) con el valor del nombre
    };

    const handleLastname = (e) => { // Misma lógica
        // e = evento // target = input // value = el valor del input del apellido
        setLastName(e.target.value);
    };

    const handleEmail = (e) => {
        // e = evento // target = input // value = el valor del input del email
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        // e = evento // target = input // value = el valor del input de la contraseña
        setPassword(e.target.value);
    };

    // Función para manejar el envío del formulario
    const handleSubmit = () => {
        if (!name || !lastName || !email || !password) { // Si nombre o apellido o email o password estan vacios, es decir, false (con la negación se vuelve true y entra al if) entonces exige que todos los campos son requeridos.
            alert("Todos los campos son obligatorios");
            return;
        }
        // Construir un objeto de usuario con la información ingresada
        const user = {
            "name": name,
            "lastName": lastName,
            "email": email,
            "password": password
        }
        // Limpiar los campos de entrada
        document.getElementById("name").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

        /* useEffect: Este hook se ejecuta cuando el componente se monta por primera vez (es decir, cuando se muestra en la pantalla). Dentro de él, hacemos una solicitud a una API para obtener datos. */
        /* fetch('url'): Esta función hace una solicitud a la API la cual en este caso se crea un usuario*/
        /* .then(response => response.json()): Esto convierte la respuesta en un formato que JavaScript puede entender, en este caso, JSON.
        .then(data => {}): Finalmente con los datos obtenidos de la API, se obtienen los datos por consola y se actualizan los datos a string vacios. */

        // Hacer una solicitud POST a la API para crear un nuevo usuario
        // Es necesario instalar cors en nuestro backend que nos permite dar funcionalidad a nuestro proyecto en node para poder gestionar el tema de los permisos
        fetch('http://localhost:8080/api/v1/crear', { // Misma ruta definida en backend 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Cabecera que indica que el contenido es de tipo JSON
            },
            body: JSON.stringify(user), //convertir objeto en JS en una cadena de texto en formato json
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                setName("");
                setLastName("");
                setEmail("");
                setPassword("");
                // Si la creación del usuario fue exitosa, establecer userCreate en true 
                if (data.status === 201)
                    setUserCreate(true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    // Efecto secundario que se ejecuta cuando userCreate cambia, al ser true se redirige a login
    useEffect(() => {
        if (userCreate) {
            navigate('/login')
        }
    }, [navigate, userCreate])

    // El componente devuelve el formulario JSX con los manejadores de eventos vinculados
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>Formulario de registro</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    onChange={handleName}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">
                                    Apellido
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    onChange={handleLastname}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    onChange={handleEmail}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    onChange={handlePassword}
                                />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserRegister;