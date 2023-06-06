(function() {
  // Comprobar si la variable score existe
  if (typeof score === 'undefined') {
    score = 0; // Si no existe, crearla e inicializarla en 0
  }

  // Incrementar el score en 1
  score += 1;

  // Llamar a la función de incremento cada segundo
  setTimeout(arguments.callee, 1000);
})();
