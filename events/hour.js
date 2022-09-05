function obtenerHora() {
    identificadorIntervaloDeTiempo = setInterval("Ha pasado 1 Minuto.", 60);
    var hoy = new Date();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    console.log("probando");
  }
  
  
  module.exports = obtenerHora;