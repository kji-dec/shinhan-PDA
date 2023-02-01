// const buttonClick = (event) => { // event를 매개변수로 받음
//     event.stopPropagation(); // 부모 요소로의 이벤트 버블링을 중지 -> 웬만하면 이벤트 버블링 중단은 하지 않는 편
//     alert('버튼을 눌렀습니다!');
// }

// // event capturing -> event 발생 시 상위 요소부터 실행됨
// // 특이한 경우가 아니면 잘 사용되지 않음
// let div = document.getElementById('div');
// div.addEventListener('click', () => alert('div'), true); // 이벤트 캡처링 true
// let button = document.getElementById('button');
// button.addEventListener('click', () => alert('button'));

// // 이벤트 위임
// const highlight = (element) => {
//     element.classList.add('highlight');
// }

// let menu = document.getElementById('menu');
// menu.addEventListener('click', (event) => {
//     highlight(event.target);
// })

// 연습문제 - 이벤트 심화
// 1
const TIMEZONE = {
    'london': 'Europe/London',
    'newyork': 'America/New_York',
    'seoul': 'Asia/Seoul'
}
let timer;

function setTimeByCountry(country) {
    let now = new Date().toLocaleString('ko-KR', { timeZone: TIMEZONE[country] })
    let currentTime = document.getElementById('currentTime');
    currentTime.innerText = now;
}

function setTime(event) {
    clearInterval(timer);
    setTimeByCountry(event.target.id);
    timer = setInterval(setTimeByCountry, 1000, event.target.id);
}

// 2
let highlightedMenu;
let menu = document.getElementById('menu');
const highlight = (element) => {
    if (highlightedMenu){
        highlightedMenu.classList.remove('highlight');
    }
    element.classList.add('highlight');
    return element;
}

menu.addEventListener('click', (event) => {
    if(event.target.tagName !== 'BUTTON'){
        return;
    }
    highlightedMenu = highlight(event.target);
})