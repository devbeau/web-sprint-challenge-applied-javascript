// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

function getTabs(){ // API call to get topics for the tabs container
    axios.get('https://lambda-times-api.herokuapp.com/topics')
        .then((response) => {
            console.log(response.data);
            let responseArray = Array.from(response.data.topics);
            console.log(responseArray);
            createTabs(responseArray);
        })
        .catch((error) =>   {
            console.log("tabs axios error", error);
            debugger;
        })
}
function createHTMLElement(htmlElement, className = 0, textContent = 0){ // create elements with class and textcontent
    let element = document.createElement(htmlElement);
    className !== 0 ? element.classList.add(className) : element;
    textContent !== 0 ? element.textContent = textContent : element.textContent = null;
    return element;
}

function createTabs(tabTopicArray){ // function to create and append tabs from an array
    let container = document.querySelector('.topics');
    tabTopicArray.forEach((item) => {
        let topicDiv = createHTMLElement('div', 'tab', `${item}`);
        container.appendChild(topicDiv);
    })
}

getTabs();  //invoke component creation