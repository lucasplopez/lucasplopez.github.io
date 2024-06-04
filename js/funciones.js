// clock.js

function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    
    // Obtener todos los elementos con la clase 'time-text' y actualizar su contenido
    const elements = document.getElementsByClassName('hora-actualizada');
    Array.from(elements).forEach(element => {
      element.textContent = formattedTime;
    });


      // Actualizar la fecha
    updateDate();
  }
  
  // Actualizar la hora cada segundo
  setInterval(updateClock, 10000);
  
  // Llamar a la función inicialmente para mostrar la hora actual
  updateClock();

  function updateDate() {
    const daysOfWeek = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const dateOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
  
    const formattedDate = `${dayOfWeek}, ${dateOfMonth} de ${month}`;
    
    // Obtener todos los elementos con la clase 'date' y actualizar su contenido
    const dateElements = document.getElementsByClassName('date');
    Array.from(dateElements).forEach(dateElement => {
      dateElement.textContent = formattedDate;
    });
  }