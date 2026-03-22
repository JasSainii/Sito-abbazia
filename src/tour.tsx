import React, { useState, useEffect } from 'react';
import imageMapResize from 'image-map-resizer';

interface Opera {
  img: string;
  titolo: string;
}

// MAPPATURA RIGIDA: Numero Punto = Numero File
const OPERE: Record<string, Opera> = {
  "p1": { img: "img/pitture/pitture1.jpg", titolo: "1. San Giorgio e il drago" },
  "p2": { img: "img/pitture/pitture2.jpg", titolo: "2. Madonna in trono con Santi" },
  "p3": { img: "img/pitture/pitture3.jpg", titolo: "3. Annunciazione" },
  "p4": { img: "img/pitture/pitture4.jpg", titolo: "4. Motivi decorativi sagrestia" },
  "p5": { img: "img/pitture/pitture5.jpg", titolo: "5. Motivi decorativi monastero" },
  "p6": { img: "img/pitture/pitture6.jpg", titolo: "6. Sei Santi" },
  "p7": { img: "img/pitture/pitture7.jpg", titolo: "7. Santi Caterina e Agostino" },
  "p8": { img: "img/pitture/pitture8.jpg", titolo: "8. Storia di Sant'Agata" },
  "p9": { img: "img/pitture/pitture9.jpg", titolo: "9. Sant'Agata e San Pietro" },
  "p10": { img: "img/pitture/pitture10.jpg", titolo: "10. Storie di San Benedetto" },
  "p11": { img: "img/pitture/pitture11.jpg", titolo: "11. Fregio con putti" },
  "p12": { img: "img/pitture/pitture12.jpg", titolo: "12. Motivi decorativi foresteria" },
  "p13": { img: "img/pitture/pitture13.jpg", titolo: "13. San Benedetto in gloria" },
  "p14": { img: "img/pitture/pitture14.jpg", titolo: "14. Pittura murale scalinata" },
  
  "q1": { img: "img/quadri/quadro1.jpg", titolo: "1. Santa Francesca Romana" },
  "q2": { img: "img/quadri/quadro2.jpg", titolo: "2. Incoronazione della Vergine" },
  // ... aggiungi gli altri quadri q3, q4 seguendo lo stesso schema
};

const TourVirtuale: React.FC = () => {
  const [activeOpera, setActiveOpera] = useState<Opera | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Attiva il ridimensionamento automatico delle mappe
    imageMapResize();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (id: string) => {
    if (OPERE[id]) setActiveOpera(OPERE[id]);
  };

  const handleMouseLeave = () => {
    setActiveOpera(null);
  };

  return (
    <div className="tour-page" onMouseMove={handleMouseMove} style={{ backgroundColor: '#F8F4EC', minHeight: '100vh' }}>
      <header>
        <span>
          <img src="img/logo.png" alt="Logo" id="header-logo" />
          <a href="/">Abbazia di Villanova</a>
        </span>
      </header>

      <main className="content" style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#C5A253', marginBottom: '30px' }}>Tour Virtuale</h2>

        <section className="tour" style={{ textAlign: 'center' }}>
          <div className="mappa-container" style={{ position: 'relative', display: 'inline-block' }}>
            
            <h3>Pitture Murali</h3>
            <img src="img/pitture.png" useMap="#pitture" className="mappa" alt="Mappa Pitture" style={{ maxWidth: '100%', height: 'auto' }} />
            <map name="pitture">
              {/* Usa le coordinate assolute che avevi o rigenerale per i nuovi punti */}
              <area shape="circle" coords="1239,197,15" onMouseEnter={() => handleMouseEnter('p1')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="300,250,15" onMouseEnter={() => handleMouseEnter('p2')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="1353,284,15" onMouseEnter={() => handleMouseEnter('p3')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="523,181,15" onMouseEnter={() => handleMouseEnter('p4')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="1136,288,15" onMouseEnter={() => handleMouseEnter('p5')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="800,200,15" onMouseEnter={() => handleMouseEnter('p6')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="850,300,15" onMouseEnter={() => handleMouseEnter('p7')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="400,100,15" onMouseEnter={() => handleMouseEnter('p8')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="450,100,15" onMouseEnter={() => handleMouseEnter('p9')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="700,400,15" onMouseEnter={() => handleMouseEnter('p10')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="350,750,15" onMouseEnter={() => handleMouseEnter('p11')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="400,800,15" onMouseEnter={() => handleMouseEnter('p12')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="1300,350,15" onMouseEnter={() => handleMouseEnter('p13')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="1200,450,15" onMouseEnter={() => handleMouseEnter('p14')} onMouseLeave={handleMouseLeave} />
            </map>

            <br /><br />

            <h3>Quadri</h3>
            <img src="img/quadri.png" useMap="#quadri" className="mappa" alt="Mappa Quadri" style={{ maxWidth: '100%', height: 'auto' }} />
            <map name="quadri">
              <area shape="circle" coords="1114,283,15" onMouseEnter={() => handleMouseEnter('q1')} onMouseLeave={handleMouseLeave} />
              <area shape="circle" coords="1024,279,15" onMouseEnter={() => handleMouseEnter('q2')} onMouseLeave={handleMouseLeave} />
            </map>

            {/* ANTEPRIMA CHE SEGUE IL MOUSE */}
            {activeOpera && (
              <div 
                className="preview" 
                style={{ 
                  display: 'block',
                  position: 'fixed', 
                  left: `${coords.x + 20}px`, 
                  top: `${coords.y + 20}px`,  
                  pointerEvents: 'none',      
                  zIndex: 9999,
                  backgroundColor: 'white',
                  border: '2px solid #cbb994',
                  borderRadius: '8px',
                  padding: '10px',
                  width: '260px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                  textAlign: 'center'
                }}
              >
                <img 
                  src={activeOpera.img} 
                  alt={activeOpera.titolo} 
                  style={{ 
                    width: '100%', 
                    height: '180px', 
                    objectFit: 'contain', 
                    display: 'block',
                    margin: '0 auto',
                    borderRadius: '4px'
                  }} 
                />
                <p style={{ margin: '10px 0 0', fontSize: '14px', fontWeight: 'bold', color: '#2e5d4b' }}>
                  {activeOpera.titolo}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TourVirtuale;