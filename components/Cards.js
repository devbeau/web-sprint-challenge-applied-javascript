// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function getCardData () {
    axios.get('https://lambda-times-api.herokuapp.com/articles')
        .then((response) => {
            console.log(response.data);
            let bootstrapArticles = response.data.articles.bootstrap;
            let jsArticles = response.data.articles.javascript;
            let jqueryArticles = response.data.articles.jquery;
            let nodeArticles = response.data.articles.node;
            let techArticles = response.data.articles.technology;
            console.log(bootstrapArticles);
            let bigArticleArray = bootstrapArticles.concat(jsArticles, jqueryArticles,
                                                           nodeArticles, techArticles);
            console.log(bigArticleArray);
            bigArticleArray.forEach(item => {
                createCards(item);
            })
        })
        .catch((error) => {
            console.log("getCardData Error", error);
            debugger;
        })

    }


function createHTMLElement(htmlElement, className = 0, textContent = 0){
    let element = document.createElement(htmlElement);
    className !== 0 ? element.classList.add(className) : element;
    textContent !== 0 ? element.textContent = textContent : element.textContent = null;
    return element;
}

function textContentOnClick(element, targetTextElement) {
    element.addEventListener('click', (event) => {
        console.log("headlineOnClick -> event", event)
        console.log(targetTextElement.textContent);
    })
    return 0;
}

function createCards(articleObj){
    let cardDiv =      createHTMLElement('div', 'card');
    let headlineDiv =  createHTMLElement('div', 'headline', `${articleObj.headline}`);
    let authorDiv =    createHTMLElement('div', 'author')
    let imgContainer = createHTMLElement('div', 'img-container');
    let authorImg =          createHTMLElement('img');
    let authorSpan   = createHTMLElement('span', 0 , `${articleObj.authorName}`)

    authorImg.setAttribute('src', `${articleObj.authorPhoto}`);

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    authorDiv.appendChild(authorSpan);

    textContentOnClick(cardDiv, headlineDiv);

    let container = document.querySelector('.cards-container');
    
    return container.appendChild(cardDiv);
}

getCardData();