// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function createHTMLElement(htmlElement, className = 0, textContent = 0){
    let element = document.createElement(htmlElement);
    className !== 0 ? element.classList.add(className) : element;
    textContent !== 0 ? element.textContent = textContent : element.textContent = null;
    return element;
}

function createHeader() {

let headerDiv = createHTMLElement('div', 'header');
let headerSpanOne = createHTMLElement('span', 'date', 'March 28, 2020');
let headerH1 = createHTMLElement('h1', 0 , 'Lambda Times');
let headerSpanTwo = createHTMLElement('span', 'temp', '98°');

console.log("createHeader -> headerDiv", headerDiv)
console.log("createHeader -> headerSpanOne", headerSpanOne)
console.log("createHeader -> headerH1", headerH1)
console.log("createHeader -> headerSpanTwo", headerSpanTwo)

headerDiv.appendChild(headerSpanOne);
headerDiv.appendChild(headerH1);
headerDiv.appendChild(headerSpanTwo);

let container = document.querySelector('.header-container');
console.log(container);

return container.appendChild(headerDiv);
}

createHeader();
