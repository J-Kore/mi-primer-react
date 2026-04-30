import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import IA from './pages/IA';
import Podcast from './pages/Podcast';
import Clases from './pages/Clases';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        {/* Menú de Navegación */}
        <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
          <ul className="flex justify-center space-x-6 font-semibold text-slate-600">
            <li><Link to="/" className="hover:text-blue-600">Inicio</Link></li>
            <li><Link to="/ia" className="hover:text-blue-600">IA & ELE</Link></li>
            <li><Link to="/podcast" className="hover:text-blue-600">Podcast</Link></li>
            <li><Link to="/clases" className="hover:text-blue-600">Clases Online</Link></li>
            <li><Link to="/contacto" className="hover:text-blue-600">Contacto</Link></li>
          </ul>
        </nav>

        {/* Contenedor de las Páginas */}
        <div className="container mx-auto py-10">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/ia" element={<IA />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/clases" element={<Clases />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;