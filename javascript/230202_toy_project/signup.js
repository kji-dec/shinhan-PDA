const SERVER_URL = 'http://127.0.0.1:8000'

async function register(user) {
    let response = await fetch(`${SERVER_URL}/user/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json',
        },
        credentials: 'include', // 쿠키 설정
    });
    let data = await response.json();
    return data
}

async function login(user) {
    let response = await fetch(`${SERVER_URL}/user/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json',
        },
        credentials: 'include',
    });
    if (response.status === 200) {
        let data = await response.json();
        setCookie('access_token', data.access_token); // 쿠키 설정
        return data;
    } else {
        return new Error('에러 발생')
    }
}

async function submitRegister() {
    let user = {
        email: document.getElementById('id').value,
        password: document.getElementById('pw').value,
        fullname: document.getElementById('name').value,
    };
    let result = await register(user);
    console.log(result);
}

async function submitLogin() {
    let user = {
        email: document.getElementById('id').value,
        password: document.getElementById('pw').value,
    };
    let result = await login(user);
    console.log(result);
    if (!result.access_token) {
        setCookie('access_token', result.access_token);
    }
}

function setCookie(name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/";
    document.cookie = updatedCookie;
}