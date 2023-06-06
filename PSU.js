(function() {
  // Comprobar si la variable score existe
  if (typeof score === 'undefined') {
    score = 0; // Si no existe, crearla e inicializarla en 0
  }

  // Incrementar el score en 1
  score += 1;

  // Mostrar el score actual
  console.log('Score:', score);

  // Llamar a la función de incremento cada segundo
  setTimeout(arguments.callee, 1000);

  // Texto grande azul en la consola
  console.log('%cParte Simulator Unlocker', 'font-size: 24px; color: blue;');

  // Texto más pequeño en negro en la consola
  console.log('%cScript created by Nunte Gamer', 'font-size: 14px; color: black;');
})();
