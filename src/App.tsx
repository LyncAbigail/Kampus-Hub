import { HashRouter, NavLink, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Berita from "./Berita";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <header className="header">
        <h1>KampusHub</h1>
        <p>Pusat Informasi Kampus</p>
      </header>

      <nav className="nav">
        <NavLink to="/" end>
          Dashboard
        </NavLink>

        <NavLink to="/berita">Berita / Pengumuman</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/beritas" element={<Berita />} />
      </Routes>

      <footer className="footer">
        KampusHub &middot; 2026 &middot; Pusat Informasi Kampus
      </footer>
    </HashRouter>
  );
}

export default App;
