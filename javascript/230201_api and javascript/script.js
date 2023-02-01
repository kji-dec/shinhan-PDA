// // callback -> 특정한 함수가 실행된 후에 실행하고자 하는 함수를 작성할 때 이용
// let user = {
// 	name: 'Kim',
// 	age: 20,
// 	setUserInfo: function(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// }

// function dispatchUserInfo(name, age, callback) {
// 	callback.call(user, name, age); // this로 쓸 객체를 명시함 (-> user)
// }

// dispatchUserInfo('Lee', 15, user.setUserInfo); // user.setUserInfo('Lee', 15) 실행

// function appendHello(callback) {
//     let hello = document.createElement('p');
//     hello.innerText = '안녕하세요';
//     setTimeout(() => {
//         document.body.append(hello);
//         callback(); // 위 비동기 동작을 하고 나면 내가 원하는 콜백함수를 수행
//     }, 1000);
// }
// appendHello(function () {
//     console.log(document.getElementsByTagName('p'));
// });

// // callback 지옥
// function appendText(text, callback) {
// 	let p = document.createElement('p');
// 	p.innerText = text;
// 	setTimeout(() => {
// 		document.body.append(p);
// 		// 콜백을 다루는 부분	
//     if (document.getElementsByTagName('p').length > 0) { // p 태그 추가 시 에러가 없었다면
// 		  callback(); // 비동기 동작 성공 시
//     } else { // p 태그 추가를 못했다면 callback 함수한테도 알려줌
//       callback(new Error('에러 발생')); // 비동기 동작 실패 시
//     }
// 	}, 1000);
// }

// // appendText('안', function (error) {
// //     if (error) {
// //         console.log('에러 발생');
// //     } else {
// //         appendText('녕', function (error) {
// //             if (error) {
// //                 console.log('에러 발생');
// //             } else {
// //                 appendText('하', function (error) {
// //                     if (error) {
// //                         console.log('에러 발생');
// //                     } else {
// //                         appendText('세', function (error) {
// //                             if (error) {
// //                                 console.log('에러 발생');
// //                             } else {
// //                                 appendText('요', function (error) {
// //                                     if (error) {
// //                                         console.log('에러 발생');
// //                                     } else {
// //                                         console.log('성공');
// //                                     }
// //                                 })
// //                             }
// //                         })
// //                     }
// //                 })
// //             }
// //         });
// //     }
// // });

// function step1(error) {
//     if (error) {
//         console.log('에러 발생');
//     } else {
//         appendText('녕', step2);
//     }
// }

// function step2(error) {
//     if (error) {
//         console.log('에러 발생');
//     } else {
//         appendText('하', step3);
//     }
// }

// function step3(error) {
//     if (error) {
//         console.log('에러 발생');
//     } else {
//         appendText('세', step4);
//     }
// }

// function step4(error) {
//     if (error) {
//         console.log('에러 발생');
//     } else {
//         appendText('요', step5);
//     }
// }

// function step5(error) {
//     if (error) {
//         console.log('에러 발생');
//     } else {
//         console.log('성공');
//     }
// }

// appendText('안', step1);

// // 연습문제 - callback
// function appendDiv(callback) {
//     let div = document.createElement('div');
//     div.style.width = "100px";
//     div.style.height = "100px";
//     document.body.append(div);
//     setTimeout(() => {
//         document.body.append(div)
//         callback();
//     }, 2000);
// }

// appendDiv(() => {
//     let div = document.getElementsByTagName('div')[0];
//     div.style.backgroundColor = "lightblue";
// })

// // promise -> 코드 실행의 여부를 확인할 수 있게 하는 것
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("실행완료"), 1000);
// });

// // promise chaining
// promise.then(result => {
// 	alert(result); // resolve하는 순간 실행됨
//     return result;
// }).catch(error => {
//     console.log(error);
// }).finally(() => {
//     console.log("finally");
// }).then((result) => {
//     alert(result);
// })

// // async, await
// async function hello() { // async는 무조건 promise 객체를 return함
//     return 'hello';
// }

// hello().then(result => {
//     console.log(result);
// })

// async function hello() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('안녕'), 1000)
//     });
//     let result = await promise; // promise 객체가 성공적으로 끝날 때까지 기다림
//     alert(result); // await를 하지 않으면 promise 객체 그 자체가 result가 되어버림 그래서 alert문이 실행되지 않음
// }

// hello();

// // jsonplaceholder를 이용한 fetch 실습
// fetch('https://jsonplaceholder.typicode.com/posts/2').then(result => {
//     return result.json();
// }).then(data => {
//     console.log(data);
// })

// // use async -> 위의 경우보다 가독성이 더 높음
// async function getPosts() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await response.json();
//     console.log(data);
// }

// let post = {
//     title: '수정 제목',
//     body: '수정된 내용',
// }

// async function addPost(post) {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(post),
//         headers:{
//             'Content-type': 'application/json',
//         },
//     });
//     let data = await response.json();
//     console.log(data);
// }

// async function updatePost(id, post) {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify(post),
//         headers: {
//             'Content-type': 'application/json',
//         },
//     });
//     let data = await response.json();
//     console.log(data);
// }

// async function deletePost(id, post) {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'DELETE',
//     });
//     let data = await response.json();
//     console.log(data);
// }

// async function getPost(id) {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     let data = await response.json();
//     return data;
// }

// getPost(1).then(data => {
//     let title = document.getElementById('title');
//     let body = document.getElementById('body');
//     title.innerText = data.title;
//     body.innerText = data.body;
// });

// async function insertPost(id) {
//     let data = await getPost(id);
//     let title = document.getElementById('title');
//     let body = document.getElementById('body');
//     title.innerText = data.title;
//     body.innerText = data.body;
// }

// async function addPost(post) {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
//         method: 'POST',
//         body: JSON.stringify(post),
//         headers: {
//             'Content-type': 'application/json',
//         },
//     });
//     let data = await response.json();
//     return data
// }

// async function submitPost() {
//     let post = {
//         title: document.getElementById('title').value,
//         body: document.getElementById('body').value,
//     }
//     let result = await addPost(post);
//     console.log(result);
// }

async function getPosts() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let data = await response.json();
    return data;
}

async function displayPosts() {
    let page = document.getElementsByTagName('body')[0];
    let data = await (getPosts());
    data.forEach(element => {
        page.insertAdjacentHTML("beforeend", `
            <h1>${element.title}</h1>
            <div>${element.body}</div>
            <button onclick="deletePost(${element.id})">삭제</button>
        `)
    });
}

displayPosts();

async function deletePost(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    });
    let data = await response.json();
    console.log(data);
}

async function getPost(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await response.json();
    return data;
}

async function setInput(id) {
    let data = await getPost(id);
    let title = document.getElementById("title");
    let body = document.getElementById("body");
    title.value = data.title;
    body.innerText = data.body;
}

async function sendPutPost(post, id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let data = await response.json();
    console.log(data);
}

async function putPost() {
    let post = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value,
    }
    await sendPutPost(post, 1);
}

setInput(1);

WEATHER_LOCATION = {
    'seoul': {
        'latitude': '37.57',
        'longitude': '126.98',
    },
    'london': {
        'latitude': '51.51',
        'longitude': '-0.13',
    },
    'newyork': {
        'latitude': '56.25',
        'longitude': '-5.28',
    }
}

async function getWeather(latitude, longitude) {
    let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode&current_weather=true&timezone=auto`)
    let data = await response.json();
    return data;
}

WEATHER_CODE = {
    0: "매우 맑음",
    1: "맑음",
    2: "약간 흐림",
    3: "흐림",
}

async function showWeather(event) {
    let latitude = WEATHER_LOCATION[event.target.id]['latitude'];
    let longitude = WEATHER_LOCATION[event.target.id]['longitude'];
    let data = await getWeather(latitude, longitude);
    let weather = data['current_weather'];
    let menu = document.getElementById('weather');
    menu.innerHTML = `
        <h1>${WEATHER_CODE[weather.weathercode]}</h1>
        <div>${weather.temperature}</div>
        <div>${weather.time}</div>
        <hr>
    `;
}