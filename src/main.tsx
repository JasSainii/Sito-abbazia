import React from 'react'
import ReactDOM from 'react-dom/client'
import TourVirtuale from './tour' // Rimosso '../', aggiunta virgoletta, rimosso .tsx
// Nel file main.tsx

// Nel file C:\xampp\htdocs\sito abbazia\abbazia\src\main.tsx
import "../Sito-abbazia-main/abbazia.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TourVirtuale />
  </React.StrictMode>,
)