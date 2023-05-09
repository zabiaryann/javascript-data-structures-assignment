function renderAnimals() {
  // Get a reference to the div element
  const animalContainer = document.getElementById("animals");

  // Loop through the array of objects and render them into the div
  myZooAnimals.forEach((animal) => {
    // Create a new div element for each animal
    const animalDiv = document.createElement("div");

    // Set the class attribute of the div to "animal"
    animalDiv.setAttribute("class", "animal");

    // Create an image element for the animal picture
    const animalImage = document.createElement("img");

    // Set the src attribute of the image to the pictureURL
    animalImage.setAttribute("src", animal.pictureURL);

    // Set the alt attribute of the image to the animal name
    animalImage.setAttribute("alt", animal.name);

    // Add the image element to the animal div
    animalDiv.appendChild(animalImage);

    // Create a div element for the animal information
    const animalInfoDiv = document.createElement("div");

    // Set the class attribute of the info div to "animal-info"
    animalInfoDiv.setAttribute("class", "animal-info");

    // Create a separate p element for the animal name
    const animalName = document.createElement("p");
    animalName.textContent = `Name: ${animal.name}`;
    animalInfoDiv.appendChild(animalName);

    // Create a separate p element for the animal type
    const animalType = document.createElement("p");
    animalType.textContent = `Type: ${animal.animalType}`;
    animalInfoDiv.appendChild(animalType);

    // Create a separate p element for the animal age
    const animalAge = document.createElement("p");
    animalAge.textContent = `Age: ${animal.age}`;
    animalInfoDiv.appendChild(animalAge);

    // Add the info div to the animal div
    animalDiv.appendChild(animalInfoDiv);

    // Append the new animal div to the animalContainer div
    animalContainer.appendChild(animalDiv);
  });
}

function testArray() {
  try {
    if (!(myZooAnimals instanceof Array)) {
      throw new TypeError("It seems like myZooAnimals is not an array");
    }
    if (myZooAnimals.length < 3) {
      //Not an error - just not enough animals
      alert(
        "It seems like your zoo doesn't have enough animals in it. Try adding a couple more :)"
      );
    }

    // Define a function to test that each animal object has the correct properties
    function testAnimalProperties(animal) {
      // Check that the animal object has the correct properties
      if (
        !animal.hasOwnProperty("animalType") ||
        !animal.hasOwnProperty("name") ||
        !animal.hasOwnProperty("age") ||
        !animal.hasOwnProperty("pictureURL")
      ) {
        throw new Error(
          `Animal object does not have the correct properties: ${JSON.stringify(
            animal
          )}`
        );
      }
      return true;
    }

    // Loop through the array of objects and call the testAnimalProperties function for each animal
    myZooAnimals.forEach((animal) => {
      testAnimalProperties(animal);
    });

    renderAnimals()
  } catch (e) {
    if (e instanceof ReferenceError) {
      alert(
        "It seems that myZooAnimals is nowhere to be found, try instantiating it again"
      );
    } else {
      alert(e.message);
    }
  }
}

testArray();
