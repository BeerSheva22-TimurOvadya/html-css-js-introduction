// var / const/ let - виды переменных
const detailsImageElemet = document.querySelector(".details-image");
const detailsTitleElement = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumbnails-anchor");
const detailsSectionElement = document.querySelector(".details-section")
const POINT_CLASS = "is-point";
const mainSection = document.querySelector("main");
const HIDDEN = "hidden";

for (let i = 0; i < thumbnailsAnchors.length; i++) {
    thumbnailsAnchors[i].addEventListener("click", function () {
        setDetails(thumbnailsAnchors[i]);
    })
}

function setDetails(anchor) {
    showDetails();
    detailsImageElemet.src = anchor.getAttribute("data-details-image");
    detailsTitleElement.innerHTML = anchor.getAttribute("data-details-text");
    detailsSectionElement.classList.add(POINT_CLASS);
    
    
}

function showDetails() {
    mainSection.classList.remove(HIDDEN);

    setTimeout(function () {
        detailsSectionElement.classList.remove(POINT_CLASS);
    })
    
}

function hideDetails() {
    mainSection.classList.add(HIDDEN);

}


