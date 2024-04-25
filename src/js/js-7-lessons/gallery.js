import { galleryItems } from '../../data/gallery-items';

const galleryDivRef = document.querySelector('.gallery');
galleryDivRef.addEventListener('click', handleGalleryCardClick);
galleryDivRef.innerHTML = makeGalleryMurkup(galleryItems);

function makeGalleryMurkup(pictureArray) {
  return pictureArray
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`;
    })
    .join('');
}

function showGallery(e) {
  return basicLightbox.create(`
//     <img src="${e.target.dataset.source}" width="800" height="600">
// `);
}

function handleGalleryCardClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = showGallery(e);
  instance.show();
  document.addEventListener('keydown', hendleClouseEscKeydown, { once: true });

  function hendleClouseEscKeydown(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}
