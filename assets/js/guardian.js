
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("🚫 Hey, haz tu código propio -_-");
});
document.addEventListener("keydown", function (e) {
  // F12
  if (e.key === "F12") {
    e.preventDefault();
    alert("🚫 No intentes abrir el inspector -_-");
  }
  if ((e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
      (e.ctrlKey && e.key === "u")) {
    e.preventDefault();
    alert("🚫 Aquí no se espía el código -_-");
  }
});

