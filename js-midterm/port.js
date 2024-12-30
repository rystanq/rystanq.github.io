fetch("port.json") // Path to your JSON file
  .then((response) => response.json())

  .then((imageData) => {
    const imageContainer = document.getElementById("portfolio-gallery"); // Your HTML container

    imageData.forEach((image) => {
      const imgElement = document.createElement("img");

      imgElement.src = image.src;

      imgElement.alt = image.alt;

      // Add caption or other elements as needed

      imageContainer.appendChild(imgElement);
    });
  });
