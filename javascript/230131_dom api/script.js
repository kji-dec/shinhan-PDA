// // DOM 객체는 document라는 최상위 객체를 통해 접근 가능
// console.log(document);

// // childNode에서의 text는 줄바꿈요소
// console.log(document.body.childNodes);

// // 태그만 가져오려면 아래처럼 되어야 함
// console.log(document.body.children); // HTMLCollection type

// // id를 이용해 html 요소 가져오는 방법
// let title = document.getElementById('title');
// let content = document.getElementById('content');
// console.log(title, content);
// content.innerText = "change content"; // 값 바꾸기

// //class로 elements 가져오기. id와 달리 class로 가져오게 되면 HTMLCollection으로 들고옴
// let div = document.body.getElementsByClassName('second-div');
// console.log(div);
// div[0].innerText="test";

// // tag를 이용해 elements 접근하기
// let a = document.getElementsByTagName('a')[0];
// console.log(a);
// a.href = "https://www.daum.net" // href 바꾸기

// let div = document.querySelectorAll('div');
// console.log(div);

// let div = document.querySelectorAll('div.second');
// console.log(div);

// let a = document.querySelectorAll('p > a'); // p tag 안의 a tag
// console.log(a);

// // 연습문제 - DOM API 개념
// let first = document.getElementById('first');
// let a = document.getElementsByTagName('a');
// let div = document.getElementsByTagName('div');
// let second = document.getElementsByClassName('second');
// let secondDiv = document.querySelectorAll('div.second');
// let secondDivA = document.querySelectorAll('div.second > a');

// console.log(first, a, div, second, secondDiv, secondDivA);

// let firstDiv = document.getElementById('firstDiv');
// console.log(firstDiv.tagName);
// console.log(firstDiv.innerHTML);
// firstDiv.hidden = true; // firstDiv를 화면에 표시하지 않음
// firstDiv.hidden = false;
// console.log(firstDiv.id);
// let input = document.getElementsByTagName('input')[0];
// console.log(input.value); // textbox?의 텍스트 가져오기
// input.value = 'bye';
// firstDiv.style // 스타일에 접근
// firstDiv.style.backgroundColor = 'grey';
// firstDiv.style.color = 'white';

// let blueDiv = document.getElementsByClassName('blue-div')[0];
// blueDiv.className = 'green-div'; // style을 class로 정의해뒀으니 (css에서) class 변경으로 style 변경 가능

// let blueDiv = document.getElementsByClassName('blue-div')[0];
// blueDiv.classList.add('white-text'); // class를 추가할 수 있음
// blueDiv.classList.remove('blue-div');
// blueDiv.classList.add('red-div');

// // toggle -> 이미 있으면 red-div를 제거하고, 없으면 red-div를 추가하라는 것
// blueDiv.classList.toggle('red-div');

// let img = document.getElementById('img');
// img.setAttribute('src', 'image.png');

// let a = document.getElementById('google');
// a.setAttribute('href', 'https://google.com');
// a.removeAttribute('href');

// // 연습문제 - DOM API 활용
// // 1
// let secondDiv = document.getElementsByTagName('a')[1];
// secondDiv.innerText = "네이버로 가기";
// secondDiv.setAttribute('href', 'https://www.naver.com');

// // 2
// let box = document.getElementsByClassName('box')[0];
// box.style.color = 'white';
// box.classList.add('blue-background');
// box.innerHTML = "<h1>안녕</h1>";

// // element 추가
// let div = document.createElement('div'); // div 노드 만들기
// div.innerHTML = '<h1>안녕하세요</h1>' // div 노드 내용 채우기
// document.body.append(div); // body 태그를 찾고, 해당 태그 내부에 div 노드 추가
// // node 안 중에서 append는 아래쪽에 추가하는 것, prepend는 위쪽에 추가하는 것
// // before의 경우, 노드 외부에 추가하는 것. 외부의 위쪽에 위치하게 됨.
// // after는 노드 외부의 아래쪽

// // 인접요소 추가 -> 해당 방식을 더 선호. append와 같은 명령어는 create를 해줘야함
// let firstBox = document.getElementById('firstBox');
// firstBox.insertAdjacentHTML('beforeBegin', '<p>beforebigin잘가</p>');
// firstBox.insertAdjacentHTML('afterBegin', '<p>afterbegin잘가</p>');
// firstBox.insertAdjacentHTML('beforeEnd', '<p>beforeEnd잘가</p>');
// firstBox.insertAdjacentHTML('afterEnd', '<p>afterEnd잘가</p>');
// firstBox.remove();

// // event 기초
// function toggleMenu() {
// 	let menu = document.getElementById('menu');
// 	menu.style.display = 'block';
// }

// // toggleMenu upgrade
// function toggleMenu() {
// 	let menu = document.getElementById('menu');
//     let button = document.getElementById('button');
// 	if (menu.style.display === 'none') {
//         button.innerText = "메뉴 닫기";
// 		menu.style.display = 'block';
// 	} else {
//         button.innerText = "메뉴 펼치기";
// 		menu.style.display = 'none';
// 	}
// }

// // 이벤트 리스너
// let firstBox = document.getElementById('firstBox');
// function sayHi() {
//     alert('안녕');
// }
// firstBox.addEventListener('click', sayHi); // 함수에 () 를 붙이면 안됨!

// // 이벤트 객체
// function showMsg(event) {
//     console.log(event);
//     console.log(event.target);
// }

// // DOM API 실습
// // 1
// function sum(event) {
//     let num1 = Number(document.getElementById('num1').value);
//     let num2 = Number(document.getElementById('num2').value);
//     event.target.insertAdjacentHTML('afterEnd',`<div>${num1 + num2}</div>`);
// }

// // 2
// function plus() {
//     let number = document.getElementById('number');
//     number.innerText = Number(number.innerText) + 1;
// }

// function minus() {
//     let number = document.getElementById('number');
//     number.innerText = Number(number.innerText) - 1;
// }

// DOM API 실습 - 세계 시계 만들기
let timer;
const TIMEZONE = {
    'london': 'Europe/London',
    'newyork': 'America/New_York',
    'seoul': 'Asia/Seoul'
}

function setTimeByCountry(country){
    let time = document.getElementById('time');
    let timeNow = new Date().toLocaleString('ko-KR', {timeZone: TIMEZONE[country]});
    time.innerText = timeNow;
}

function setTime(event){
    clearInterval(timer);
    setTimeByCountry(event.target.id); // 버튼 클릭 시 바로 시간이 뜨게 하기 위함
    timer = setInterval(setTimeByCountry, 1000, event.target.id);
}