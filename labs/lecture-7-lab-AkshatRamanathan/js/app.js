
// Create elements
const rootElement = document.getElementById('root');
const articleSectionElement = document.createElement('section');
// const articleSectionElement.attachShadow
const articleElements = document.querySelectorAll('article');
const articlesURI = 'data/articles.json';

class BlogArticleComponent extends HTMLElement {
    // class BlogArticleComponent extends HTMLDivElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.template = document.getElementById("blog-article").content;
        // this.shadowRoot.appendChild(this.template.cloneNode(true));
    }

    // inherited function
    connectedCallback() {
        this.render();
    }

    /**
 * Adds an article node to the section.
 *
 * @param {*} article
 * @param {*} parent
 */
    addArticle(article) {
        // const articleElement = document.createElement('article');
        const articleElement = document.createElement('blog-article');
        articleElement.id = article.id;
        articleElement.setAttribute('data-title', article.title);
        articleElement.classList.add('article');
        articleElement.innerHTML = `<h3 slot="article-name">${article.title}</h3><p slot="article-body">${article.content}</p>`;
        // articleElement.innerHTML = `<blog-article><h3 slot="article-name">${article.title}</h3><p slot="article-body">${article.content}</p></blog-article>`;
        // articleElement.innerHTML = `<blog-article><h3 slot="article-name">${article.title}</h3><p slot="article-body">${article.content}</p></blog-article>`;
        return articleElement;
    }

    /**
    * Select an article.
    *
    * @param {*} evt
    */
    selectArticle(evt) {
        console.log(`Artcle with id ${evt.target.id} is clicked.`);
    }
    /**
     * renders the shadow dom
     */
    render() {
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('href', 'styles/articles.css');
        const articleAttributeValue = this.getAttribute('data-article');
        const article = JSON.parse(articleAttributeValue);
        this.shadowRoot.appendChild(linkElement);
        this.shadowRoot.appendChild(this.addArticle(article));
        // this.shadowRoot.appendChild(this.template.cloneNode(true));



        //change template with slots for even and odd ids articles
        //  https://mdn.github.io/web-components-examples/simple-template/
        // can also use shadowroot.innterhtml, style etc
    }
}

customElements.define('blog-article', BlogArticleComponent);
// customElements.define('blog-article', BlogArticleComponent, { extends: 'div'});


/**
 * Retrive articles using fetch API.
 *
 * @param {*} uri
 * @param {*} parent
 * @param {*} processArticles
 */
const fetchArticles = async (uri, parent, processArticles) => {
    const response = await fetch(uri, { method: 'GET' });
    const articles = await response.json();
    processArticles(articles, parent);
}

/**
 * Process articles.
 *
 * @param {*} articles
 * @param {*} parent
 * @returns
 */
const processArticles = (articles, parent) => {
    articles.forEach(item => {
        const blogArticleComponent = document.createElement('blog-article');
        // const blogArticleComponent = document.createElement('div');
        // blogArticleComponent.setAttribute('is', 'blog-article');
        blogArticleComponent.id = item.id;
        blogArticleComponent.setAttribute('data-article', JSON.stringify(item));
        parent.appendChild(blogArticleComponent);

    });
}


// Building the articles.
fetchArticles(articlesURI, articleSectionElement, processArticles);
articleSectionElement.classList.add('flex-container');
rootElement.appendChild(articleSectionElement);