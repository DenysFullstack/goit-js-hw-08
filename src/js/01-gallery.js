import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");


const renderList = (arr) =>
  arr
    .map(
      (item) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
              <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a>
        </li>`
    )
    .join("");

galleryList.insertAdjacentHTML("beforeend", renderList(galleryItems));
galleryList.style.listStyle = 'none'
const lightbox = new SimpleLightbox(".gallery li a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});