const opere = {
  pittura1: { img: "img/pitture/pitture1.jpg", titolo: "Annunciazione" },
  pittura2: { img: "img/pitture/pittura2.jpg", titolo: "Madonna col Bambino" },
  pittura3: { img: "img/pitture/pittura3.jpg", titolo: "San Francesco" }
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
