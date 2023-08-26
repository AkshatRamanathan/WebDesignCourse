// const articles = [
//     {
//         id: 1,
//         title: 'Article 1',
//         content: "Lorem ipsum dolor sit amet consectetur adipisicing."
//     },
//     {
//         id: 2,
//         title: 'Article 2',
//         content: "Lorem ipsum dolor sit amet consectetur adipisicing."
//     },
//     {
//         id: 3,
//         title: 'Article 3',
//         content: "Lorem ipsum dolor sit amet consectetur adipisicing."
//     }
// ];


// creates elements
const rootElement = document.getElementById("root");
rootElement.textContent = '';
const articleSectionElement = document.createElement("section");
const articleElements = document.getElementsByTagName('article');
// const articleElements = document.querySelectorAll('article');
const articlesURI = 'data/articles.json';
console.log(`Number of articles before adding: ${articleElements.length}`);
const selectArticle = (evt) => {
    console.log(`Article with id ${evt.target.id} is clicked!`);
}

/**
 * Adds article node to the section
 * 
 * @param {*} article 
 * @param {*} parent 
 */
const addArticle = (article, parent) => {
    const articleElement = document.createElement('article');
    // const titleElement = document.createElement("h2");
    // titleElement.textContent = article.title;
    // articleElement.appendChild(titleElement);
    articleElement.id = article.id;
    articleElement.setAttribute("data-title", article.title);
    articleElement.classList.add('article');
    articleElement.innerHTML=`<h3>${article.title}</h3><p>${article.content}</p>`;
    // articleElement.textContent = article.content;
    // event registration
    articleElement.addEventListener('click', selectArticle);
    parent.appendChild(articleElement);
}

/**
 * Retrieves articles from the server.
 * @param {*} uri 
 * @param {*} processArticles 
 */
const fetchArticles = (uri, processArticles) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', uri);
    xhr.onload = (evt) => {
        const articles = JSON.parse(evt.target.responseText);
        processArticles(articles);
    }
    xhr.send();
}
// fetchArticles(articlesURI, (articles) =>
//     articles.forEach(item => addArticle(item, articleSectionElement))
// );
const processArticles = (articles) => {
    articles.forEach(item => addArticle(item, articleSectionElement))
}
fetchArticles(articlesURI, processArticles);
articleSectionElement.classList.add("flex-container");
// articles.forEach(item => addArticle(item, articleSectionElement));
rootElement.appendChild(articleSectionElement);

console.log(`Number of articles after adding: ${articleElements.length}`);
