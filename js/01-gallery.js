import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onImageClick);

function createGalleryMarkup(imgElements) {
    return imgElements
        .map(({ preview, original, description }) => {
            return  `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt='${description}'
    />
  </a>
</div>`;  
    }
    ).join(''); 
};

function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    else {
        event.target.src = event.target.dataset.source;
        const instance = basicLightbox.create(`
    <div class="modal">
    <img
      src=${event.target.src}
      alt='${event.target.alt}'
    />
    </div>
`,{ onShow: () => {
            window.addEventListener('keydown', onEscKeyPress )
            },
        })
      
      function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    instance.close();
     window.removeEventListener('keydown', onEscKeyPress);
  }
      };
      
instance.show()
    }
};

