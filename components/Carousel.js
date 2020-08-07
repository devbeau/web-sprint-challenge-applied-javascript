/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createHTMLElement(htmlElement, className = 0, textContent = 0){ // create elements with class and textcontent
  let element = document.createElement(htmlElement);
  className !== 0 ? element.classList.add(className) : element;
  textContent !== 0 ? element.textContent = textContent : element.textContent = null;
  return element;
}

function createImageElement(source, id){
 let image =  createHTMLElement('img');
 image.setAttribute('src', source);
 image.id = id;
//  image.style.display = 'inline-block';
 image.style.border = '3px darkgrey solid';
 image.style.borderRadius = '200px';
 return image;
}

function carouselButton(button, imageArray, forward = true){
  let state = 1; 
  return (button.addEventListener('click', (event) => {
    if (forward){
      state === 4 ? state = 1 : state += 1;
      } else {
      state === 1 ? state = 4 : state -= 1;
      }

    imageArray.forEach(image => {
      let splitString= image.id.split("");
      let imgNum = Number.parseInt(splitString[splitString.length -1]);
      console.log(imgNum);
      console.log(splitString);
      if ( imgNum === state){
        image.style.display = 'inline-block';
      } else{
        image.style.display = 'none';
      }
      console.log(state);
    })
  })
  )
}

function createCarousel(){
  let carouselDiv = createHTMLElement('div', 'carousel');
  let leftButton = createHTMLElement('div', 'left-button');
  let firstImage = createImageElement('https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg', 'image-1');
  let secondImage = createImageElement('https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg', 'image-2');
  let thirdImage = createImageElement('https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg', 'image-3');
  let fourthImage = createImageElement('https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg', 'image-4');
  let rightButton = createHTMLElement('div', 'right-button');

  carouselDiv.appendChild(leftButton);
  carouselDiv.appendChild(firstImage);
  carouselDiv.appendChild(secondImage);
  carouselDiv.appendChild(thirdImage);
  carouselDiv.appendChild(fourthImage);
  carouselDiv.appendChild(rightButton);

  let imageArray = [firstImage, secondImage, thirdImage, fourthImage];

  let btnForward = carouselButton(rightButton, imageArray, true);
  let btnBackward = carouselButton(leftButton, imageArray, false);

  btnForward;
  btnBackward;

  firstImage.style.display = 'inline-block';

  firstImage.style
  let container = document.querySelector('.carousel-container');
  return container.appendChild(carouselDiv);
}

createCarousel();