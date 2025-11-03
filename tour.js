const opere = {
  pittura1: { img: "img/pitture/pitture1.jpg", titolo: "Annunciazione" },
  pittura2: { img: "img/pitture/pitture2.jpg", titolo: "Madonna col Bambino" },
  pittura3: { img: "img/pitture/pitture3.jpg", titolo: "San Francesco" },
  pittura4: { img: "img/pitture/pitture4.jpg", titolo: "Crocifissione" },
  pittura5: { img: "img/pitture/pitture5.jpg", titolo: "Ultima Cena" },
  pittura6: { img: "img/pitture/pitture6.jpg", titolo: "Resurrezione" },
  pittura7: { img: "img/pitture/pitture7.jpg", titolo: "Madonna in trono" },
  pittura8: { img: "img/pitture/pitture8.jpg", titolo: "San Giovanni Battista" },
  quadro1: { img: "img/quadri/quadro1.jpg", titolo: "Ritratto di Dama" },
  quadro2: { img: "img/quadri/quadro2.jpg", titolo: "Paesaggio Montano" },
  quadro3: { img: "img/quadri/quadro3.jpg", titolo: "Natura Morta con Frutta" },
  quadro4: { img: "img/quadri/quadro4.jpg", titolo: "Veduta di Città" },
  quadro5: { img: "img/quadri/quadro5.jpg", titolo: "Ritratto di Gentiluomo" },
  quadro6: { img: "img/quadri/quadro6.jpg", titolo: "Marina al Tramonto" },
  quadro7: { img: "img/quadri/quadro7.jpg", titolo: "Scena di Battaglia" },
  quadro8: { img: "img/quadri/quadro8.jpg", titolo: "Ritratto di Famiglia" }
};

// Mostra anteprima
function mostraOpera(id) {
  const opera = opere[id];
  if (!opera) return;

  const preview = document.getElementById("preview");
  preview.querySelector("img").src = opera.img;
  preview.querySelector("#titolo").textContent = opera.titolo;
  preview.style.display = "block";
}

// Nascondi anteprima
function nascondiOpera() {
  const preview = document.getElementById("preview");
  preview.style.display = "none";
}

// Ridimensiona automaticamente le aree della mappa (responsive)
window.onload = function() {
  imageMapResize();
};

