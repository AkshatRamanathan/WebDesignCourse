
// Create elements
const rootElement = document.getElementById('root');
const articleSectionElement = document.createElement('section');
const articleElements = document.querySelectorAll('article');
const articlesURI = 'data/articles.json';
/**
 * Select an article.
 *
 * @param {*} evt
 */
const selectArticle = (evt) => {
    console.log(`Artcle with id ${evt.target.id} is clicked.`);
}
/**
 * Adds an article node to the section.
 *
 * @param {*} article
 * @param {*} parent
 */
const addArticle = (article, parent) => {
    const articleElement = document.createElement('article');
    articleElement.id = article.id;
    articleElement.setAttribute('data-title', article.title);
    articleElement.classList.add('article');
    articleElement.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
    // Event registration
    articleElement.addEventListener('click', selectArticle);
    parent.appendChild(articleElement);
}

/**
 * Retrive articles using fetch API.
 *
 * @param {*} uri
 * @param {*} processArticles
 */
const fetchArticles = async (uri, processArticles) => {
    const response = await fetch(uri, { method: 'GET' });
    const articles = await response.json();
    processArticles(articles);
}

/**
 * Process articles.
 *
 * @param {*} articles
 * @returns
 */
const processArticles = (articles) => articles.forEach(item => addArticle(item, articleSectionElement));

// Building the articles.
fetchArticles(articlesURI, processArticles);
articleSectionElement.classList.add('flex-container');
rootElement.appendChild(articleSectionElement);