const SERVER_URL = 'http://127.0.0.1:8000'

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

async function postArticle(article) {
    let token = getCookie('access_token');
    let response = await fetch(`${SERVER_URL}/blog/article`, {
        method: 'POST',
        body: article,
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    let data = await response.json();
    return data;
}

async function submitArticle() {
    let form = document.getElementById('form');
    let formData = new FormData(form);
    let result = await postArticle(formData);
    console.log(result);
    document.location.reaload();
}

async function postCategory(category) {
    let token = getCookie('access_token');
    let response = await fetch(`${SERVER_URL}/blog/category`, {
        method: 'POST',
        body: JSON.stringify(category),
        headers: {
            'Content-type': 'application/json', 
            'Authorization': `Bearer ${token}`,
        },
    });
    let data = await response.json();
    return data;
}

async function submitCategory() {
    let category = {
        name: document.getElementById('newCategory').value,
    }
    let result = await postCategory(category);
    console.log(result);
    document.location.reload();
}

async function putArticle(id, article) {
    let token = getCookie('access_token');
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
        method: 'PUT',
        body: article,
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    let data = await response.json();
    return data;
}

async function updateArticle(event) {
    let form = document.getElementById('updateForm');
    let formData = new FormData(form);
    let result = await putArticle(event.target.id, formData);
    console.log(result);
    document.location.reaload();
}

async function getArticle(id) {
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`);
    let data = await response.json();
    return data;
}

async function setArticle(id) {
    let article = await getArticle(id);
    document.getElementById("updateTitle").value = article.title;
    document.getElementById("updateContent").innerText = article.content;
    document.getElementById("updateCategory").value = article.category.name;

}

const showCreateModal = () => {
    let modal = document.getElementById('createModal');
    modal.style.display = 'flex';
}

const closeCreateModal = () => {
    let modal = document.getElementById('createModal');
    modal.style.display = 'none';
}

const showUpdateModal = (id) => {
    let modal = document.getElementById('updateModal');
    modal.style.display = 'flex';
    modal.getElementsByTagName('button')[0].id = id;
    setArticle(id);
}

const closeUpdateModal = () => {
    let modal = document.getElementById('updateModal');
    modal.style.display = 'none';
}