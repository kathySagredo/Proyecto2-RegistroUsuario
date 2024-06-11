import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/admin/Admin';
import UserRegister from './components/user-register/UserRegister';
import UserLogin from './components/user-login/UserLogin';

/* import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';: Aquí estamos importando varias cosas de una biblioteca llamada react-router-dom. Esta biblioteca se usa para manejar la navegación entre diferentes "páginas" dentro de una aplicación React.
BrowserRouter (renombrado como Router): Imagina que es el GPS de tu aplicación. Te ayuda a moverte entre diferentes lugares (o páginas).
Route: Es como una señal de tráfico que te dice a dónde ir cuando tomas una ruta específica. 
Routes: Es un contenedor para todas las rutas (señales de tráfico) que defines. */

function App() {
  return (
    <Router> {/* <Router>: Esto envuelve toda tu aplicación y permite que uses la navegación. Es como si estuvieras diciendo "a partir de aquí, puedo moverme entre diferentes páginas". */}
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/registro" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
