function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

async function getArticle(id) {
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`);
    let data = await response.json();
    return data;
}

async function insertArticle(id) {
    let article = await getArticle(id);
    // TODO - document.body를 modal로 변경!!!!!!
    let modal = document.getElementById('showModal');
    modal.innerHTML = `
        <div id="item">
            <h1>제목: ${article.title}</h1>
            <h2>카테고리: ${article.category.name}</h2>
            <p>작성자: ${article.author}<p>
            <p>${article.content}</p>
            <button onclick="closeModal()">닫기</button>
        </div>
    `
}

async function getArticles() {
    let response = await fetch(`${SERVER_URL}/blog/article`);
    let data = await response.json();
    return data;
}

async function insertArticles() {
    let articles = await getArticles();
    let list = document.getElementById('list');
    articles.forEach(article => {
        list.insertAdjacentHTML("beforeend", `
        <div id="${article.id}">
            <h1>제목: ${article.title}</h1>
            <button onclick="showModal(${article.id})">상세보기</button>
            <button onclick="deleteArticle(${article.id})">삭제</button>
            <button onclick="showUpdateModal(${article.id})">수정</button>
            <hr>
        </div>
    `);
    });
}

async function getCategories() {
    let response = await fetch(`${SERVER_URL}/blog/category`);
    let data = await response.json();
    return data;
}

async function insertCategories() {
    let categories = await getCategories();
    let position = document.getElementById('categories');
    categories.forEach(category => {
        position.insertAdjacentHTML("beforeend", `
            <button onclick="getCategoryArticles(${category.id})">${category.name}</button>
        `);
    });
}

async function deleteArticle(id) {
    let token = getCookie('access_token');
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    if (response.status === 204) {
        let post = document.getElementById(id);
        post.remove();
    }
}

async function getCategoryArticles(categoryId) {
    let result = await getArticles();
    articles = result.filter(article => article.category.id === categoryId);
    let list = document.getElementById('list');
    let listArticles = '';
    articles.forEach(article => {
        listArticles += `
            <div id="${article.id}">
                <h1>제목: ${article.title}</h1>
                <button onclick="showModal(${article.id})">상세보기</button>
                <button onclick="deleteArticle(${article.id})">삭제</button>
                <button onclick="showUpdateModal(${article.id})">수정</button>
                <hr>
            </div>
        `;
    });
    list.innerHTML = listArticles;
}

const showModal = (id) => {
    let modal = document.getElementById('showModal');
    modal.style.display = 'flex';
    insertArticle(id);
}

const closeModal = () => {
    let modal = document.getElementById('showModal');
    modal.style.display = 'none';
}

insertArticles();
insertCategories();