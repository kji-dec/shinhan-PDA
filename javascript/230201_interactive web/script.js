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

// // 연습문제 - 이벤트 심화
// // 1
// const TIMEZONE = {
//     'london': 'Europe/London',
//     'newyork': 'America/New_York',
//     'seoul': 'Asia/Seoul'
// }
// let timer;

// function setTimeByCountry(country) {
//     let now = new Date().toLocaleString('ko-KR', { timeZone: TIMEZONE[country] })
//     let currentTime = document.getElementById('currentTime');
//     currentTime.innerText = now;
// }

// function setTime(event) {
//     clearInterval(timer);
//     setTimeByCountry(event.target.id);
//     timer = setInterval(setTimeByCountry, 1000, event.target.id);
// }

// // 2
// let highlightedMenu;
// let menu = document.getElementById('menu');
// const highlight = (element) => {
//     if (highlightedMenu){
//         highlightedMenu.classList.remove('highlight');
//     }
//     element.classList.add('highlight');
//     return element;
// }

// menu.addEventListener('click', (event) => {
//     if(event.target.tagName !== 'BUTTON'){
//         return;
//     }
//     highlightedMenu = highlight(event.target);
// })

// let id = document.getElementById('id');
// let pw = document.getElementById('pw');

// const onFocus = (event) => {
//     event.target.style.backgroundColor = 'bisque';
// }

// const onBlur = (event) => {
//     event.target.style.backgroundColor = null;
// }

// id.addEventListener('focus', onFocus);
// pw.addEventListener('focus', onFocus);

// id.addEventListener('blur', onBlur);
// pw.addEventListener('blur', onBlur);

// pw.addEventListener('keydown', (event) => {
//     if (event.key === "Enter"){
//         alert("enter key pressed");
//     }
// })

// // 연습문제
// // 1
// let id = document.getElementById('id');
// let pw = document.getElementById('pw');

// const onFocus = (event) => {
//     event.target.style.width = parseInt(event.target.style.width) * 2 + "px";
//     event.target.style.height = parseInt(event.target.style.height) * 2 + "px";
// }

// const onBlur = (event) => {
//     event.target.style.width = parseInt(event.target.style.width) / 2 + "px";
//     event.target.style.height = parseInt(event.target.style.height) / 2 + "px";
// }

// id.addEventListener('focus', onFocus);
// id.addEventListener('blur', onBlur);
// pw.addEventListener('focus', onFocus);
// pw.addEventListener('blur', onBlur);

// // 2
// const incSize = (event) => {
//     if (event.key === "Backspace"){
//         event.target.style.width = parseInt(event.target.style.width) - 10 + "px";
//     }
// }

// const decSize = (event) => {
//     if (event.key.length === 1) {
//         event.target.style.width = parseInt(event.target.style.width) + 10 + "px";
//     }
// }

// id.addEventListener('keydown', incSize);
// id.addEventListener('keydown', decSize);

// pw.addEventListener('keydown', incSize);
// pw.addEventListener('keydown', decSize);

// // 3
// const colorBlue = (event) => {
//     event.target.style.backgroundColor = "blue";
// }

// const colorWhite = (event) => {
//     event.target.style.backgroundColor = null;
// }

// id.addEventListener('mousedown', colorBlue);
// id.addEventListener('mouseup', colorWhite);

// pw.addEventListener('mousedown', colorBlue);
// pw.addEventListener('mouseup', colorWhite);

// const moveImage = (img, x, y) => {
//     img.style.left = x - (img.offsetWidth / 2) + 'px';
//     img.style.top = y - (img.offsetHeight / 2) + 'px';
// }

// const onMouseDown = (event) => { // event -> 마우스를 처음 클릭했을 때
//     const img = event.target;
//     img.style.position = 'absolute';

//     const moveTargetByEvent = (e) => moveImage(img, e.pageX, e.pageY);

//     document.addEventListener('mousemove', moveTargetByEvent);

//     img.onmouseup = () => {
//         document.removeEventListener('mousemove', moveTargetByEvent);
//         img.onmouseup = null;
//     }
// }

// const next = () => {
//     let items = document.getElementsByClassName('item');
//     for (let item of items) {
//         item.style.transform = `translate(-100%)`; // 해당 요소 크기만큼 왼쪽으로 이동
//     }
// }

// const transition = (event) => {
//     event.target.classList.add('animate');
// }

// 실습
// 1
const showModal = () => {
    let modal = document.getElementById('modal');
    modal.style.display = 'flex';
    modal.classList.add('open');
}

const closeModal = () => {
    let modal = document.getElementById('modal');
    modal.classList.add('close');
    setTimeout(() => modal.style.display = 'none', 1999);
}

// 2
let index = 0;
const next = () => {
    index += 1;
    for (let item of items) {
        console.log(item.style.transform)
        item.style.transform = `translate(${-100 * index}%)`
    }
}

const prev = () => {
    index -= 1;
    let items = document.getElementsByClassName('item');
    for (let item of items) {
        item.style.transform = `translate(${-100 * index}%)`;
    }
}