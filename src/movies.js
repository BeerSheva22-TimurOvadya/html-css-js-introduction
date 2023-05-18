import moviesObj from '../movies.json' assert { type: 'json' };
const detailsImageElemet = document.querySelector('.details-image');
const detailsTitleElement = document.querySelector('.details-title');
const detailsSectionElement = document.querySelector('.details-section');

const thumbnailsList = document.querySelector('.thumbnails-list');

const POINT_CLASS = 'is-point';
const mainSection = document.querySelector('main');
const HIDDEN = 'hidden';
console.log(moviesObj.httpPrefix);

// prettier-ignore
thumbnailsList.innerHTML = moviesObj.results.map((movie) => {
    return `<li class="thumbnails-item">
            <a href="#" class="thumbnails-anchor" data-details-image="${moviesObj.httpPrefix}${movie.backdrop_path}" 
            data-details-text="${movie.overview.slice(0, 100)}">
            <img src="${moviesObj.httpPrefix}${movie.poster_path}" class="thumbnails-image">
            <span class="thumbnails-title">${movie.title}</span>                
            </a>
        </li> `;
}).join('');


const thumbnailsAnchors = document.querySelectorAll('.thumbnails-anchor');

thumbnailsAnchors.forEach((anchor) =>
    anchor.addEventListener('click', setDetails.bind(undefined, anchor)),
);

function setDetails(anchor) {
    showDetails();
    detailsImageElemet.src = anchor.getAttribute('data-details-image');
    detailsTitleElement.innerHTML = anchor.getAttribute('data-details-text');
    detailsSectionElement.classList.add(POINT_CLASS);
}

function showDetails() {
    mainSection.classList.remove(HIDDEN);
    setTimeout(function () {
        detailsSectionElement.classList.remove(POINT_CLASS);
    });
}

function hideDetails() {
    mainSection.classList.add(HIDDEN);
}
window.hideDetails = hideDetails;
