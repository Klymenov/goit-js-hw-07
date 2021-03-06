import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')
const cardsMarkup = createGalleryMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)

galleryContainer.addEventListener('click', onClick)

function createGalleryMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
    `;
    })
    .join('');
}
new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });

function onClick(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") { 
        return
    }
}