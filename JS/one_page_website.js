// Select all images that have the lightbox-image class
let images = document.querySelectorAll(".lightbox-image");

// Select the lightbox
let lightbox = document.getElementById("lightbox");

// Select the large image inside the lightbox
let lightboxImage = document.getElementById("lightbox-image");

// Select the caption
let lightboxCaption = document.getElementById("lightbox-caption");

// Select the close button
let closeLightbox = document.getElementById("close-lightbox");


// Add a click event to each image
images.forEach(function(image) {

    image.addEventListener("click", function() {

        // Display the lightbox
        lightbox.style.display = "flex";

        // Put the clicked image into the lightbox
        lightboxImage.src = image.src;

        // Put the image description into the caption
        lightboxCaption.textContent = image.alt;

    });

});


// Close the lightbox when the X is clicked
closeLightbox.addEventListener("click", function() {

    lightbox.style.display = "none";

});


// Close the lightbox when the dark background is clicked
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});
