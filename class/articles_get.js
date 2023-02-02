const SERVER_URL = 'http://127.0.0.1:8000'

async function getArticles() {
    let response = await fetch(`${SERVER_URL}/blog/article`);
    let data = await response.json(); 
    return data;
}


async function insertArticles(){
    let articles = await getArticles();
    articles.forEach((article) => {
        document.body.insertAdjacentHTML('beforeEnd', `
            <div id = "${article.id}">
                <h1>${article.title}</h1>
                <button onclick="deleteArticle(${article.id})">삭제</button> 
            </div>
        `)
    })
}