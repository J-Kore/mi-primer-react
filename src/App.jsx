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
        {/* Menú de Navegación Profesional */}
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="font-bold text-xl tracking-tight text-slate-900 italic">
              Juanjo<span className="text-blue-600">.</span>
            </span>
            <ul className="flex items-center space-x-8 text-sm font-medium text-slate-600">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Inicio</Link></li>
              <li><Link to="/ia" className="hover:text-blue-600 transition-colors">IA & ELE</Link></li>
              <li><Link to="/podcast" className="hover:text-blue-600 transition-colors">Podcast</Link></li>
              <li><Link to="/clases" className="hover:text-blue-600 transition-colors">Clases</Link></li>
              <li>
                <Link to="/contacto" className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-100">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Espacio para el contenido de las páginas */}
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/ia" element={<IA />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/clases" element={<Clases />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        
        {/* Pie de página sencillo opcional */}
        <footer className="py-10 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Juanjo ELE - Tecnología y Educación
        </footer>
      </div>
    </Router>
  );
}

export default App;