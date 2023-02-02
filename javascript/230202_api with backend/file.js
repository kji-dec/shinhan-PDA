const SERVER_URL = 'http://127.0.0.1:8000'

async function postImage(formData) {
    let response = await fetch(`${SERVER_URL}/blog/image`, {
        method: 'POST',
        body: formData,
    });
    let data = await response.json();
    return data
}

async function submitImage() {
    let formElement = document.getElementById('form');
    let image = new FormData(formElement);
    let result = await postImage(image);
    console.log(result);
}