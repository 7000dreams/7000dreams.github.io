document.addEventListener("DOMContentLoaded", function () {
  // Function to rotate images with a smooth transition
  function rotateImages(imageElement, imageArray, interval) {
    let currentIndex = 0;

    setInterval(function () {
      imageElement.classList.add("fade-out");

      setTimeout(function () {
        currentIndex = (currentIndex + 1) % imageArray.length;
        imageElement.src = imageArray[currentIndex];
        imageElement.classList.remove("fade-out");
      }, 1000); // Match this duration to the CSS transition time
    }, interval);
  }

  // Ladakh feature image rotation
  const ladakhImages = [
    "images/ladakh/image1.webp",
    "images/ladakh/image3.webp",
    "images/ladakh/image4.webp",
    "images/ladakh/image5.webp",
    "images/ladakh/image6.webp",
    "images/ladakh/image7.webp",
    "images/ladakh/image8.webp",
    "images/ladakh/image9.webp",
    "images/ladakh/image10.webp",
    "images/ladakh/image11.webp",
    "images/ladakh/image12.webp",
    "images/ladakh/image13.webp",
    "images/ladakh/image14.webp",
    "images/ladakh/image15.webp",
    "images/ladakh/image16.webp",
    "images/ladakh/image17.webp",
    "images/ladakh/image18.webp",
    "images/ladakh/image19.webp",
    "images/ladakh/image20.webp",
    "images/ladakh/image21.webp",
    "images/ladakh/image22.webp",
    "images/ladakh/image23.webp",
  ];
  const ladakhElement = document.getElementById("ladakh-feature");
  rotateImages(ladakhElement, ladakhImages, 5000); // Change every 5 seconds

  // Add similarly for other locations as needed
});
