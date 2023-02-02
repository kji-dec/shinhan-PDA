const SERVER_URL = 'http://127.0.0.1:8000'

async function postArticle(article) {
    let response = await fetch(`${SERVER_URL}/blog/article`, {
        method: 'POST',
        body: JSON.stringify(article),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let data = await response.json();
    return data;
}

async function submitArticle() {
    let article = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
    }
    let result = await postArticle(article);
    console.log(result);
    location.reload();
}

async function getArticle(id) {
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`);
    let data = await response.json();
    return data;
}

async function insertArticle(id) {
    let data = await getArticle(id);
    let title = document.getElementById('title');
    let content = document.getElementById('content');
    title.innerText = data.title;
    content.innerText = data.content;
}

async function getArticles() {
    let response = await fetch(`${SERVER_URL}/blog/article`);
    let data = await response.json();
    return data;
}

async function insertArticles(){
    let articles = await getArticles();
    articles.forEach(article => {
        document.body.insertAdjacentHTML("beforeend", `
            <div id="${article.id}">
                <h1>${article.title}</h1>
                <p>${article.content}</p>
                <button onclick="deleteArticle(${article.id})">삭제</button>
            </div>
        `);
    });
}

async function deleteArticle(id) {
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
        method: 'DELETE',
    });
    if (response.status === 204) {
        let post = document.getElementById(id);
        post.remove();
    }
}

async function putArticle(id, article) {
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
        method: 'PUT',
        body: JSON.stringify(article),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let data = await response.json();
    return data;
}

async function setArticle(id) {
    let article = await getArticle(id);
    document.getElementById("titleUpdate").value = article.title;
    document.getElementById("contentUpdate").innerText = article.content;
    document.getElementById("titleUpdate").parentElement.id = id;
}

async function updateArticle(event) {
    let body = {
        "title": document.getElementById("titleUpdate").value,
        "content": document.getElementById("contentUpdate").value,
    };
    let id = event.target.previousElementSibling.id;
    console.log(id);
    let article = await putArticle(id, body);
    return article.status;
}

// 원래는 js 파일도 분리하는 게 좋음
if (location.href.includes('get.html')) {
    insertArticles();
}

if (location.href.includes('index.html')) {
    setArticle(11);
}
