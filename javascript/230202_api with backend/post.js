const SERVER_URL = 'http://127.0.0.1:8000'

async function postImage(article) {
    let response = await fetch(`${SERVER_URL}/blog/article`, {
        method: 'POST',
        body: article, // formdata는 json화할 필요 없음!
    });
    let data = await response.json();
    return data
}

async function submitArticle() {
    let form = document.getElementById('form');
    let formData = new FormData(form);
    let result = await postImage(formData);
    console.log(result);
}