
document.addEventListener("DOMContentLoaded", function () {
    // Establecer la fecha objetivo para la cuenta regresiva
    const targetDate = new Date("2024-12-31T23:59:59");
  
    // Función para actualizar el temporizador
    function updateCountdown() {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;
  
      if (timeDifference > 0) {
        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  
        document.getElementById("timer").innerHTML =
          formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
      } else {
        document.getElementById("timer").innerHTML = "¡Tiempo terminado!";
      }
    }
  
    // Función para dar formato a los dígitos del tiempo (añade un cero inicial si es necesario)
    function formatTime(time) {
      return time < 10 ? "0" + time : time;
    }
  
    // Actualizar el temporizador cada segundo
    setInterval(updateCountdown, 1000);
  
    // Inicializar el temporizador al cargar la página
    updateCountdown();
  });
