import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const divGalleryRef = document.querySelector(".gallery");

const galleryMarkupRef = createGalleryMarkup(galleryItems);

divGalleryRef.insertAdjacentHTML("beforeend", galleryMarkupRef);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
        `;
    })
    .join("");
}
new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
// Change code below this line

console.log(galleryItems);