import { motion } from "framer-motion";
import { MapPin, Plane } from "lucide-react";

function App() {
  return (
    <div className="app">
      {/* HERO */}
      <section className="hero">
        <motion.div
          className="overlay"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
        />
        <div className="hero-content">
          <h1>NOA 2025</h1>
          <p>Salta & Tilcara: donde la tierra toca el cielo</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <h2>Una región única</h2>
        <p>
          El Noroeste Argentino combina selvas, valles y la Puna,
          con una identidad cultural única en América Latina.
        </p>
      </section>

      {/* DESTINOS */}
      <section className="section dark">
        <h2>Destinos principales</h2>
        <div className="grid">
          <div className="card">
            <h3>Salta Capital</h3>
            <p>Turismo cultural, naturaleza y gastronomía.</p>
          </div>
          <div className="card">
            <h3>Tilcara</h3>
            <p>Corazón de la Quebrada de Humahuaca.</p>
          </div>
        </div>
      </section>

      {/* ATRACTIVOS */}
      <section className="section">
        <h2>Atractivos</h2>
        <div className="grid">
          <div className="card">Cerro de los 7 Colores</div>
          <div className="card">Salinas Grandes</div>
          <div className="card">Pucará de Tilcara</div>
          <div className="card">Tren a las Nubes</div>
        </div>
      </section>

      {/* ACCESO */}
      <section className="section dark">
        <h2><Plane /> Cómo llegar</h2>
        <p>
          Desde Rosario podés viajar en avión, bus o auto.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>Planificá tu viaje</h2>
      </footer>
    </div>
  );
}

export default App;