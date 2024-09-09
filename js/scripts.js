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

  // Botswana feature image rotation
  const botswanaImages = [
    "images/botswana/image2.webp",
    "images/botswana/image3.webp",
    "images/botswana/image4.webp",
    "images/botswana/image5.webp",
    "images/botswana/image6.webp",
  ];
  const botswanaElement = document.getElementById("botswana-feature");
  rotateImages(botswanaElement, botswanaImages, 4000); // Change every 4 seconds

  // Kanha feature image rotation
  const kanhaImages = [
    "images/kanha/image1.webp",
    "images/kanha/image2.webp",
    "images/kanha/image3.webp",
    "images/kanha/image4.webp",
    "images/kanha/image5.webp",
  ];
  const kanhaElement = document.getElementById("kanha-feature");
  rotateImages(kanhaElement, kanhaImages, 6000); // Change every 6 seconds

  // Corbett feature image rotation
  const corbettImages = [
    "images/corbett/image1.webp",
    "images/corbett/image2.webp",
    "images/corbett/image3.webp",
    "images/corbett/image4.webp",
    "images/corbett/image5.webp",
  ];
  const corbettElement = document.getElementById("corbett-feature");
  rotateImages(corbettElement, corbettImages, 4000); // Change every 4 seconds

  // Bhigwan feature image rotation
  const bhigwanImages = [
    "images/bhigwan/image1.webp",
    "images/bhigwan/image2.webp",
    "images/bhigwan/image4.webp",
    "images/bhigwan/image5.webp",
  ];
  const bhigwanElement = document.getElementById("bhigwan-feature");
  rotateImages(bhigwanElement, bhigwanImages, 4000); // Change every 4 seconds

  // Bandhavgarh feature image rotation
  const bandhavgarhImages = [
    "images/bandhavgarh/image1.webp",
    "images/bandhavgarh/image2.webp",
    "images/bandhavgarh/image3.webp",
    "images/bandhavgarh/image4.webp",
    "images/bandhavgarh/image5.webp",
  ];
  const bandhavgarhElement = document.getElementById("bandhavgarh-feature");
  rotateImages(bandhavgarhElement, bandhavgarhImages, 6000); // Change every 6 seconds

  // Ladakh feature image rotation
  const ladakhImages = ["images/ladakh/image2.webp", "images/ladakh/image6.webp"];
  const ladakhElement = document.getElementById("ladakh-feature");
  rotateImages(ladakhElement, ladakhImages, 5000); // Change every 6 seconds

  // Sahyadris feature image rotation
  const sahyadrisImages = [
    "images/sahyadris/image1.webp",
    "images/sahyadris/image4.webp",
  ];
  const sahyadrisElement = document.getElementById("sahyadris-feature");
  rotateImages(sahyadrisElement, sahyadrisImages, 4000); // Change every 4 seconds
});
