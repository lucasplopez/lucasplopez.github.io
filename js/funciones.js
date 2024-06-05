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


  class GalleryComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          .gallery {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .gallery-content {
            max-width: 90%;
            max-height: 90%;
            overflow: auto;
          }
          .gallery img, .gallery html {
            max-width: 100%;
            max-height: 100%;
          }
          .gallery.active {
            display: flex;
          }
        </style>
        <div class="gallery">
          <div class="gallery-content"></div>
        </div>
      `;
      this.gallery = this.shadowRoot.querySelector('.gallery');
      this.galleryContent = this.shadowRoot.querySelector('.gallery-content');
    }
  
    connectedCallback() {
      document.querySelectorAll('[data-gallery]').forEach(item => {
        item.addEventListener('click', (e) => this.openGallery(e));
      });
      this.gallery.addEventListener('click', () => this.closeGallery());
    }
  
    openGallery(event) {
      const galleryId = event.target.dataset.gallery;
      this.renderGalleryContent(galleryId);
      this.gallery.classList.add('active');
    }
  
    closeGallery() {
      this.gallery.classList.remove('active');
    }
  
    renderGalleryContent(galleryId) {
      let content = '';
      switch(galleryId) {
        case 'gallery1':
          content = '<img src="img/gallery1.png" alt="Gallery 1">';
          break;
        case 'gallery2':
          content = '<img src="img/gallery2.jpg" alt="Gallery 2">';
          break;
        case 'gallery3':
          content = '<img src="img/gallery3.jpg" alt="Gallery 3">';
          break;
        case 'gallery4':
          content = '<img src="img/gallery4.jpg" alt="Gallery 4">';
          break;
        default:
          content = '<p>Galeria</p>';
      }
      this.galleryContent.innerHTML = content;
    }
  }
  
  customElements.define('gallery-component', GalleryComponent);