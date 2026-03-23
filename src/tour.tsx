import React, { useState, useEffect } from 'react';
import imageMapResizer from 'image-map-resizer';

const opereData: Record<string, { titolo: string; img: string }> = {
  p1: { titolo: "Affresco Abside", img: "/img/pitture/pitture1.jpg" },
  p2: { titolo: "San Benedetto", img: "/img/pitture/pitture2.jpg" },
  p3: { titolo: "Il Miracolo", img: "/img/pitture/pitture3.jpg" },
  p4: { titolo: "Navata Centrale", img: "/img/pitture/pitture4.jpg" },
  p5: { titolo: "La Crocifissione", img: "/img/pitture/pitture5.jpg" },
  p6: { titolo: "Annunciazione", img: "/img/pitture/pitture6.jpg" },
  p7: { titolo: "Ultima Cena", img: "/img/pitture/pitture7.jpg" },
  p8: { titolo: "Dettaglio Volte", img: "/img/pitture/pitture8.jpg" },
  p9: { titolo: "Pittura 9", img: "/img/pitture/pitture9.jpg" },
  p10: { titolo: "Pittura 10", img: "/img/pitture/pitture10.jpg" },
  p11: { titolo: "Pittura 11", img: "/img/pitture/pitture11.jpg" },
  p12: { titolo: "Pittura 12", img: "/img/pitture/pitture12.jpg" },
  p13: { titolo: "Pittura 13", img: "/img/pitture/pitture13.jpg" },
  p14: { titolo: "Pittura 14", img: "/img/pitture/pitture14.jpg" },
  q1: { titolo: "Quadro Antico 1", img: "/img/quadri/quadro1.jpg" },
  q2: { titolo: "Quadro Antico 2", img: "/img/quadri/quadro2.jpg" },
};

const TourVirtuale: React.FC = () => {
  const [activeOpera, setActiveOpera] = useState<{ titolo: string; img: string } | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    imageMapResizer();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (id: string) => {
    if (opereData[id]) setActiveOpera(opereData[id]);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {/* HEADER COPIATO DAL TUO CSS */}
      <header>
        <span>
          <img src="img/logo.png" alt="Logo" id="header-logo" />
          <a href="index.html">Abbazia di Villanova</a>
        </span>
        <nav>
          <a href="index.html">Home</a>
          <a href="chisiamo.html">Chi siamo</a>
          <a href="chisiamo2.html">Chi siamo v2</a>
          <a href="../storia.html">Storia</a>
          <a href="corsi.html">Corsi</a>
          <a href="musei.html">Musei</a>
        </nav>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="content">
        <h2>Tour Virtuale Interattivo</h2>
        
        <p style={{ textAlign: 'center', marginBottom: '40px', fontStyle: 'italic' }}>
          Passa il mouse sui numeri per visualizzare le opere dell'Abbazia.
        </p>

        {/* SEZIONE PITTURE */}
        <div className="mappa-container">
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2e5d4b', fontSize: '1.8em', marginBottom: '15px' }}>Pitture Murali</h3>
          <img src="img/pitture.png" useMap="#pitture" className="mappa" alt="Mappa Pitture" />
          <map name="pitture">
            <area shape="circle" coords="1239,197,15" onMouseEnter={() => handleMouseEnter('p1')} onMouseLeave={() => setActiveOpera(null)} href="#" onClick={(e)=>e.preventDefault()} />
            <area shape="circle" coords="300,250,15" onMouseEnter={() => handleMouseEnter('p2')} onMouseLeave={() => setActiveOpera(null)} href="#" />
            <area shape="circle" coords="1353,284,15" onMouseEnter={() => handleMouseEnter('p3')} onMouseLeave={() => setActiveOpera(null)} href="#" />
            <area shape="circle" coords="523,181,15" onMouseEnter={() => handleMouseEnter('p4')} onMouseLeave={() => setActiveOpera(null)} href="#" />
            <area shape="circle" coords="1136,288,15" onMouseEnter={() => handleMouseEnter('p5')} onMouseLeave={() => setActiveOpera(null)} href="#" />
            <area shape="circle" coords="800,200,15" onMouseEnter={() => handleMouseEnter('p6')} onMouseLeave={() => setActiveOpera(null)} href="#" />
            <area shape="circle" coords="850,300,15" onMouseEnter={() => handleMouseEnter('p7')} onMouseLeave={() => setActiveOpera(null)} href="#" />
            <area shape="circle" coords="400,100,15" onMouseEnter={() => handleMouseEnter('p8')} onMouseLeave={() => setActiveOpera(null)} href="#" />
            <area shape="circle" coords="450,100,15" onMouseEnter={() => handleMouseEnter('p9')} onMouseLeave={() => setActiveOpera(null)} href="#" />
            <area shape="circle" coords="700,400,15" onMouseEnter={() => handleMouseEnter('p10')} onMouseLeave={() => setActiveOpera(null)} href="#" />
            <area shape="circle" coords="350,750,15" onMouseEnter={() => handleMouseEnter('p11')} onMouseLeave={() => setActiveOpera(null)} href="#" />
            <area shape="circle" coords="400,800,15" onMouseEnter={() => handleMouseEnter('p12')} onMouseLeave={() => setActiveOpera(null)} href="#" />
            <area shape="circle" coords="1300,350,15" onMouseEnter={() => handleMouseEnter('p13')} onMouseLeave={() => setActiveOpera(null)} href="#" />
            <area shape="circle" coords="1200,450,15" onMouseEnter={() => handleMouseEnter('p14')} onMouseLeave={() => setActiveOpera(null)} href="#" />
          </map>
        </div>

        {/* SEZIONE QUADRI */}
        <div className="mappa-container" style={{ marginTop: '50px' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2e5d4b', fontSize: '1.8em', marginBottom: '15px' }}>Quadri ed Esposizioni</h3>
          <img src="img/quadri.png" useMap="#quadri" className="mappa" alt="Mappa Quadri" />
          <map name="quadri">
            <area shape="circle" coords="1114,283,15" onMouseEnter={() => handleMouseEnter('q1')} onMouseLeave={() => setActiveOpera(null)} href="#" />
            <area shape="circle" coords="1024,279,15" onMouseEnter={() => handleMouseEnter('q2')} onMouseLeave={() => setActiveOpera(null)} href="#" />
          </map>
        </div>

        {/* ANTEPRIMA FLYING (CSS inline necessario per il posizionamento dinamico) */}
        {activeOpera && (
          <div 
            style={{ 
              position: 'fixed', 
              left: `${coords.x + 20}px`, 
              top: `${coords.y + 20}px`,  
              pointerEvents: 'none',      
              zIndex: 9999,
              backgroundColor: 'white',
              border: '2px solid #cbb994',
              borderRadius: '8px',
              padding: '10px',
              width: '240px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
              textAlign: 'center'
            }}
          >
            <img src={activeOpera.img} alt={activeOpera.titolo} style={{ width: '100%', borderRadius: '4px' }} />
            <p style={{ margin: '10px 0 0', fontWeight: 'bold', fontFamily: 'Spectral, serif', color: '#2e5d4b' }}>
              {activeOpera.titolo}
            </p>
          </div>
        )}
      </main>

      {/* FOOTER COPIATO DAL TUO CSS */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Abbazia di Villanova</h3>
            <p>Un viaggio tra arte, storia e spiritualità nel cuore del territorio.</p>
          </div>
          <div className="footer-section">
            <h4>Link Rapidi</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="../chisiamo.html">Chi siamo</a></li>
              <li><a href="chisiamo2.html">Chi siamo v2</a></li>

              <li><a href="storia.html">Storia</a></li>
              <li><a href="musei.html">Musei</a></li>
              <li> <a href = "corsi.html"> Corsi</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contatti</h4>
            <p>Email: info@abbaziavillanova.it<br/>Tel: +39 045 1234567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 - Progetto Scolastico Classe 5^ - Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
};

export default TourVirtuale;