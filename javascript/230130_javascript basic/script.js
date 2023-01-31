// alert('내용'); // 브라우저가 자체적으로 지원하는 기능
// console.log('console.log'); // js에서 지원하는 기능 -> 디버그할 땐 이걸 주로 사용
// // 원칙적으로는 세미콜론(;)을 구문 끝마다 붙여주는 게 원칙(블록형태의 코드에는 붙이지 않음)
// // 컨벤션마다 다름!

// let a = 'Hello'; // 값이 변할 수 있는 변수
// alert(a);

// a = 'Bye';

// "use strict";
// a = 'Hello';
// alert(a);

// const b = 'Hello'; // 값이 변할 수 없는 변수 (상수)

// let c; // undefined (값이 할당되지 않음)
// c = '선언 후 할당';

// // 옛날에는 var도 존재했었음 -> scope 관련 문제 등으로 사용하지 않음

// let x = 5;
// console.log(x++);
// alert(x);

// let x = 1;
// console.log(x += 2)
// alert(x)

// let name = 'jingnii';
// alert(`Hello, I'm ${name}`); // 원한다면 백틱 안에서 함수도 실행 가능

// let str = 'hello world';
// alert(str.slice(0, 5)); // 끝 index는 '미만'으로 인식됨 (0부터 4까지)
// console.log(str.length);

// alert(str.split(' ')[0]); // 배열로 return함

// alert(str.includes('hello')); //true -> 문자열 포함 여부 확인 가능

// let input = prompt('이름을 입력하세요', ''); // 사용자에게 보여줄 문자열, input이 안 들어왔을 경우 default 문자열
// alert(`당신의 이름은 ${input}입니다.`);

// let input = confirm('글을 삭제하시겠습니까?');
// alert(input)

// // if statement
// let x = 3;
// if (x === 3) {
//     alert('x는 3입니다.');
// }

// // 가독성을 높이기 위한 방법
// let x = 3;
// const isThree = (x === 3);
// if (isThree) {
//     alert('x는 3입니다.');
// }

// let age = prompt('나이를 입력하세요', '');
// if (age > 18) {
//     alert('성인');
// } else { // if else문은 중괄호에 바로 연이어 작성하는 게 원칙
//     alert('미성년자');
// }

// let age = prompt('나이를 입력하세요', '');
// if (age > 18) {
//     alert('성인');
// } else if (age > 10) { // 조건 1이 거짓이고 조건 2가 참인 경우
//     alert('청소년');
// } else {
//     alert('유아');
// } // 가독성이 안 좋아질 수 있으므로, else if는 두, 세개 정도만 사용하도록 함

// // 삼항연산자
// let age = prompt('나이를 입력하세요', '');
// age > 18 ? alert('성인') : alert('미성년자') // 참인 경우 : 거짓인 경우

// // 중첩 삼항연산자는 가독성이 떨어짐
// let age = prompt('나이를 입력하세요', '');
// (age > 18) ? alert('성인') : (age > 10) ? alert('청소년') : alert('유아')

// // 비교를 위한 typecasting
// let age = prompt('나이를 입력해주세요', '');
// age = Number(age); // 숫자로 typecasting
// alert(typeof age);
// age = String(age); // 문자열로 typecasting
// alert(typeof (age));

// // switch -> ifelse보다 가독성이 좋음
// let device = 'Desktop';
// switch (device) {
//     case 'Desktop':
//         alert('데스크탑입니다.');
//         break; // break를 걸지 않으면 case가 뭔지 상관 없이 모든 코드를 실행하게 됨
//     case 'Tablet':
//         alert('채블릿입니다.');
//         break;
//     case 'Mobile':
//         alert('모바일입니다.')
//         break;
//     default:
//         alert('알 수 없음');
//         break;
// }

// // 연습문제 - 조건문
// // 1
// let score = prompt('점수를 입력하세요', '');
// score = Number(score)

// if (score >= 95) {
//     alert('A');
// } else if (score >= 90) {
//     alert('B');
// } else if (score >= 85) {
//     alert('C');
// } else {
//     alert('F');
// }

// // 2
// let number1 = Number(prompt('첫번째 숫자를 입력하세요', ''));
// let number2 = Number(prompt('두번째 숫자를 입력하세요', ''));

// const isEven = (number1 % 2 === 0 && number2 % 2 === 0);
// const isOdd = (number1 % 2 === 1 && number2 % 2 === 1);

// if (isEven) {
//     alert("짝수입니다.");
// } else if (isOdd) {
//     alert("홀수입니다.");
// }

// // while loop
// let i = 0; // while문 조건에 이용할 변수 선언

// while (i < 3) { // i가 3이 되는 순간 멈춤
//     alert(i); // 0, 1, 2 alert
//     i++;
// }

// // for loop
// for (let i = 0; i < 3; i++) {
//     alert(i)
// }

// // break and continue
// for (let i = 0; i < 3; i++) {
//     if (i === 2) break;
//     alert(i); // 0, 1 alert
// }

// for (let i = 0; i < 3; i++) {
//     if (i === 1) continue;
//     alert(i); // 0, 2 alert
// }

// // 연습문제 - 반복문
// // 1
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) console.log(i);
// }

// // 2
// while (true) {
//     let userInput = prompt("멈추고 싶다면, 그만을 입력하세요", '');
//     if (userInput === '그만') break;
// }

// // 함수 -> scope와 관련한 문제가 생김. 
// // 함수 내부에서 정의한 변수는 외부에서 접근할 수 없음
// // 함수 외부에서 정의한 변수를 내부에서는 접근할 수 있음
// // 실무에서는 전역 변수를 잘 사용하지 않음 -> 매개변수로 명시하는 게 좋음
// function showMsg() {
//     alert('hello');
//     alert('hello');
//     alert('hello');
// }

// function showMsg(msg) {
//     alert(msg);
// }

// function sum(a, b) {
//     return a + b;
// }
// alert(sum(3, 4))

// // 연습문제 - 함수
// // 1
// function showMultiple(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num * i);
//     }
// }

// // 2
// function sumMultiple(num) {
//     let ret = 0;
//     for (let i = 1; i <= 10; i++) {
//         ret += num * i;
//     }
//     return ret;
//     // return 55 * num;
// }

// // 3
// function informAge(name, age) {
//     let key = '';
//     if (age > 18) {
//         key = '성인';
//     } else {
//         key = '미성년자';
//     }
//     console.log(`${name}님은 ${key}입니다.`);
// }

// // 실습 1
// // 0은 가위, 1은 바위, 2는 보
// const user = Number(prompt("숫자를 입력하세요. 0: 가위, 1: 바위, 2: 보", ''));
// const computer = Math.floor(Math.random() * 3);

// const userWin = ((user === 0 && computer === 2) || user === computer + 1 && user !== 0);
// const msg = `user: ${user}, computer: ${computer}\n0: 가위, 1: 바위, 2: 보`;

// if (computer === user) {
//     alert(`${msg} 비김`);
// } else if (userWin) {
//     alert(`${msg} 유저 승`);
// } else {
//     alert(`${msg} 유저 패`);
// }

// // 실습 2
// const randNum = Math.floor(Math.random() * 99 + 1);
// let isWin = false;
// console.log(randNum);

// while (!isWin) {
//     let userNum = Number(prompt("1~100까지의 수를 고르세요", ''));
//     if (userNum === randNum) {
//         alert('정답');
//         isWin = true;
//     } else if (userNum > randNum) {
//         alert('다운');
//     } else {
//         alert('업');
//     }
// }

// // 실습 3
// let br = 0
// while (br <= 31) {
//     let brUser = Number(prompt(`현재 숫자: ${br}\n몇 개의 수를 입력하시겠습니까? (1~3)`, ''));
//     br += brUser;
//     if (br >= 31) {
//         alert("user win");
//         break;
//     }
//     alert(`현재 숫자: ${br}\n이제 컴퓨터의 차례입니다.`);
//     let brComputer = Math.floor(Math.random() * 10) % 3 + 1;
//     br += brComputer;
//     alert(`현재 숫자: ${br}`);
//     if (br >= 31) {
//         alert("computer win");
//         break;
//     }
// }

// // scope
// let msg = '난 전역스코프';

// function showMsg() {
//     let msg = '난 함수스코프';
//     if (true) {
//         let msg = '난 블록스코프'; // 함수 밖에 msg가 있지만, 여기서 선언한 msg가 우선됨 (블록스코프) 
//         alert(`블록스코프:${msg}`);
//     }
//     alert(`함수스코프:${msg}`);
// }

// showMsg();
// alert(`전역스코프:${msg}`);

// // hoisiting
// console.log(num);
// let num = 2; // hoisting은 되었으나, 초기화 전에 값에 접근할 수 없음


// // function scope
// "use strict"
// let input = prompt('')
// if (input === '잘가') {
//     function hello() {
//         alert('잘가');
//     }
// } else if (input === '안녕') {
//     function hello() {
//         alert('안녕');
//     }
// }
// hello('안녕'); // err

// // 함수 선언
// function sum(a, b) {
//     return a + b;
// }

// // 함수 표현식
// let sum = function (a, b) {
//     return a + b;
// }

// // 화살표 함수 -> 최근에 가장 많이 사용
// // 작성하기 편함, 코드가 길어졌을 때 가독성이 높아짐
// let sum = (a, b) => {
//     return a + b;
// }

// // 연습문제 - 함수 심화
// // 함수 표현식
// let calculator = function (type, a, b) {
//     if (type === 'sum') {
//         return a + b
//     } else if (type === 'subtract') {
//         return a + b
//     } else {
//         alert('올바른 타입을 명시해주세요.')
//     }
// }

// // 화살표 함수
// let calculatorArrow = (type, a, b) => {
//     if (type === 'sum') {
//         return a + b
//     } else if (type === 'subtract') {
//         return a + b
//     } else {
//         alert('올바른 타입을 명시해주세요.')
//     }
// }

// //object
// let email = "abc@abc.com"
// const user = {
//     name: 'Kim',
//     age: 20,
//     email,
// }
// // user = {}; // err
// user.age = 30; // no err
// alert(user.age);
// alert(user['age']);
// console.log(user);

// alert("age" in user);

// for (let key in user) {
//     alert(key);
//     alert(user[key]);
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user)); // array 형태
// console.log(Object.hasOwn(user, 'name')); // key 값이 있는지 확인하는 함수

// let msg1 = '안녕';
// let msg2 = msg1; // 값을 복사하는 것!
// alert(msg2); // 안녕

// msg1 = '잘가';
// alert(msg2); // 안녕

// // 객체의 복사는 참조값(주소)을 저장하는 것임! -> 얕은 복사
// let user1 = {
//     name: 'Kim',
// };

// let user2 = user1;
// console.log(user2); // {name: 'Kim'}

// user1.name = 'Lee'
// console.log(user2); // {name: 'Lee'}

// // 객체의 복사 1
// let user1 = {
//     name: 'Kim',
// };

// let user2 = {};
// for (let key in user1) {
//     user2[key] = user1[key];
// }
// console.log(user1, user2);

// // 객체의 복사 2
// let user1 = {
//     name: 'Kim',
// };
// let user2 = Object.assign({}, user1);
// console.log(user1, user2);
// user1.name = 'Lee';
// console.log(user1, user2);

// // 객체에 함수 할당
// let user = {
//     name: 'Kim', // 프로퍼티
//     age: 20,
//     sayHi: function () { // 메서드
//         let name = 'park';
//         alert(`나는 ${this.name}이야. 잘부탁해`);
//     },
// };
// user.sayHi(); // 나는 Kim이야. 잘부탁해

// // 객체 내부 접근
// let user = {
//     name: 'Kim',
//     age: 20,
//     sayHi: function () {
//         let name = 'park';
//         alert(`나는 ${this.name}이야. 잘부탁해`); // 여기서 this는 . 앞에 있는 객체를 의미함
//     }
// };
// user.sayHi(); // 나는 Kim이야. 잘부탁해 -> 여기서 user.sayHi()를 했기 때문에 user.name이 된 것임

// let user = {
//     name: 'Kim',
//     age: 20
// };

// function sayHi() {
//     alert(`나는 ${this.name}이야. 잘부탁해`);
// }

// user.sayHi = sayHi; // 외부 함수를 객체 내로
// user.sayHi(); // 나는 Kim이야. 잘부탁해

// let user = {
//     name: 'Kim',
//     age: 20,
//     sayHi: () => {
//         alert(`나는 ${this.name}이야. 잘부탁해`); // this를 외부 context에서 받아옴(전역 객체에서 받아옴)
//     }
// };
// user.sayHi(); // 나는 이야. 잘부탁해
// // 화살표 함수는 user를 this로 접근할 수 없음 -> 화살표 함수 자체가 this가 없는 함수임

// // 화살표 함수에서의 this
// let user = {
//     name: 'Kim',
//     age: 20,
//     sayHi: function () {
//         let showMsg = () => alert(`나는 ${this.name}이야. 잘부탁해`); // 외부 context는 user 객체임 -> user 객체의 this를 받아올 수 있음
//         showMsg();
//     }
// };
// user.sayHi(); // 나는 Kim이야. 잘부탁해

// let user = new Object(); // Object = 자바스크립트 내장 생성자
// function User(name, age) { // 생성자 함수
//     this.name = name;
//     this.age = age;
// }
// let user = new User('Kim', 20);
// console.log(user);

// // 생성자 내의 메서드
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHi = function () {
//         alert(`저는 ${this.name} 입니다!`)
//     }
// }
// let user = new User('Kim', 20); // 명시한 인자가 프로퍼티 값에 할당
// user.sayHi(); // 저는 Kim 입니다!

// // getter와 setter
// let user = {
//     name: "Kim",
//     age: 20,

//     get info() {
//         return `${this.age}살 ${this.name}`;
//     },
// };

// alert(user.info); // 20살 Kim

// let user = {
//     name: "Kim",
//     set age(value) { // 이 프로퍼티에 값을 지정하면 아래의 코드를 실행해라
//         alert(`${value} 를 할당하셨네요!`);
//     }
// };
// user.age = 2;

// let user = {
//     name: "Kim",
//     get age() {
//         return this._age;
//     },
//     set age(value) {
//         if (value <= 0) {
//             alert('나이는 0보다 커야 합니다.');
//             return;
//         }
//         return this._age = value;
//     }
// };

// user.age = -2;

// // 연습문제 - 객체
// // 1
// let scores = {
//     Kim: 50,
//     Park: 70,
//     Lee: 80,
// };
// let total = 0;
// for (let key in scores) {
//     total += scores[key];
// }
// console.log(total);

// // 2
// let player = {
//     hp: 80,
//     mp: 50,
//     heal: function () {
//         this.mp -= 10;
//         this.hp += 10;
//     },
// }
// player.heal();
// console.log(player);

// // 배열
// let fruits = ['사과', '바나나', '배'];
// console.log(fruits);
// fruits[5] = '복숭아'; // err 나지 않음! 
// console.log(fruits); // ['사과', '바나나', '배', empty × 2, '복숭아']

// let fruits = ["사과", "바나나", "배"];
// let fruit = fruits.pop(); // 마지막 요소 추출 및 return
// console.log(fruit); // 배
// console.log(fruits); // [사과, 바나나]

// let fruits = ["사과", "바나나", "배"];
// fruits.push("복숭아"); // 제일 뒤에 추가
// console.log(fruits); // ['사과', '바나나', '배', '복숭아']

// let fruits = ["사과", "바나나", "배"];
// fruit = fruits.shift(); // 첫 요소 추출 및 return
// console.log(fruit); // 사과
// console.log(fruits); // [바나나, 배]

// let fruits = ["바나나", "배"];
// fruits.unshift("사과"); // 제일 앞에 추가
// console.log(fruits); // [사과, 바나나, 배]
// // shift, unshift는 인덱스를 재조정하므로 성능이 느림

// let fruits = ['사과', '바나나', '배'];
// console.log(fruits.indexOf('사과')); // 0

// let fruits = ['사과', '바나나', '배'];
// console.log(fruits.includes('사과')); // true
// console.log(fruits.includes('복숭아')); // false

// let fruits = ["사과", "바나나", "배"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// let fruits = ["사과", "바나나", "배"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let fruits = ["사과", "바나나", "배"];

// for (let key in fruits) { // of를 사용할 때보다 더 느림
//     console.log(fruits[key]);
// }

// let fruits = ["사과", "바나나", "배"];

// fruits.forEach(fruit => { // array for loop에서는 주로 forEach를 사용함
//     console.log(fruit);
// })

// fruits.forEach((fruit, index) => {
//     console.log(`${fruit} 은 ${index} 번째 요소입니다.`);
// });

// // find
// let users = [
//     {id: 1, name: "Kim"},
//     {id: 2, name: "Lee"},
//     {id: 3, name: "Park"}
// ];

// let user = users.find(item => item.id === 1);
// // 배열 내부 요소를 반복하여 접근하며,
// // 조건을 만족하는 요소를 찾는 순간 반복을 중단하고 해당 요소를 return
// // 첫 번째 요소만 return!

// console.log(user); // {id: 1, name: "Kim"}

// let users = [
//     {id: 1, name: "Kim"},
//     {id: 2, name: "Kim"},
//     {id: 3, name: "Park"}
//   ];

//   let user = users.filter(item => item.name === "Kim"); // 화살표 함수에 중괄호를 사용하면 return문을 별도로 사용해야 함
//   // 배열 내부 요소 (item 이라는 변수명으로 각각 받아옴) 를 반복하여 접근하며,
//   // 조건을 만족하는 요소를 전부 찾아 해당 요소들이 담긴 배열을 return

//   console.log(user); // [{id: 1, name: "Kim"}, {id: 2, name: "Kim"}]

// let users = [
//     {id: 1, name: "Kim"},
//     {id: 2, name: "Kim"},
//     {id: 3, name: "Park"}
//   ];

//   let user = users.map(item => {
//     return {id: item.id, name: item.name + ' John'}
//   });
//   // 배열 내부 요소를 반복하여 접근하며,
//   // 각 요소마다 함수를 실행하여 그 return 값을 담은 배열을 return

//   console.log(user);
//   /*
//   {id: 1, name: 'Kim John'}
//   {id: 2, name: 'Kim John'}
//   {id: 3, name: 'Park John'}
//   */

// // 바로 위의 map과 동일한 것
// let users = [
//     {id: 1, name: "Kim"},
//     {id: 2, name: "Kim"},
//     {id: 3, name: "Park"}
// ];

// let user = users.map(item => ({id: item.id, name: item.name + ' John'}));
// // 배열 내부 요소를 반복하여 접근하며,
// // 각 요소마다 함수를 실행하여 그 return 값을 담은 배열을 return

// console.log(user);
// /*
// {id: 1, name: 'Kim John'}
// {id: 2, name: 'Kim John'}
// {id: 3, name: 'Park John'}
// */

// // reduce -> 함수를 실행하면서 이전 요소 함수의 결과를 현재 요소 함수에서 사용할 수 있음
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0); // (이전 return 값, 현재 arr[i]의 값), 마지막 0은 sum의 초기값
// console.log(result); // 15

// // sort
// let arr = [2, 3, 1, 5, 4];
// arr.sort();
// console.log(arr); // [1, 2, 3, 4, 5]

// // sort는 문자열을 기준으로 정렬함
// let arr = [1, 2, 10];
// arr.sort();
// console.log(arr); // [1, 10, 2]

// // 숫자로 정렬하려면?
// let arr = [1, 10, 2];
// arr.sort((a, b) => a - b); // a가 더 크면 (값이 양수라면) b, a 순으로 배치, b가 더 크면 (값이 음수라면) a, b 순으로 배치
// console.log(arr); // [1, 2, 10]

// arr.reverse(); // 역순 정렬
// console.log(arr);

// // 연습문제 - 배열
// // 1
// let scores = {
//     Kim: { math: 50, english: 70 },
//     Park: { math: 70, english: 60 },
//     Lee: { math: 80, english: 50 },
// };

// // let scoreArr = Object.values(scores);
// // let total = scoreArr.reduce((previousReturn, currentElement) => previousReturn + currentElement.english, 0);
// let total = Object.values(scores).reduce((sum, current) => sum + current.english, 0);
// console.log(total);

// // 2
// let students = [
//     { id: 1, name: 'Kim', score: { math: 50, english: 70 } },
//     { id: 2, name: 'Park', score: { math: 80, english: 60 } },
//     { id: 3, name: 'Lee', score: { math: 70, english: 50 } },
// ];

// let filteredStudents = students.filter(student => student.score.math >= 60);
// console.log(filteredStudents);

// // 3
// students.map(student => student['sum'] = student.score.english + student.score.math);
// console.log(students);

// // destructuring
// let user = {
// 	name: 'Kim',
// 	age: 20,
// };
// let { name, age } = user; // 구조 분해
// alert(`저는 ${name} 이고, ${age} 살입니다.`); // 저는 Kim 이고, 20 살입니다.

// // spread syntax
// let user = {
// 	name: 'Kim',
// 	age: 20,
// };

// let busanUser = {
// 	name: 'Kim',
// 	age: 20,
// 	city: 'Busan',
// };

// let seoulUser = {
// 	name: 'Kim',
// 	age: 20,
// 	city: 'Seoul',
// };
// // 위는 굉장히 귀찮음! 이럴 때 사용하는 게 spread syntax
// let user = {
// 	name: 'Kim',
// 	age: 20,
// };

// let busanUser = {
// 	...user, // name: 'Kim', age: 20
// 	city: 'Busan'
// };

// let seoulUser = {
// 	...user,
// 	city: 'Seoul'
// };

// // rest syntax
// let seoulUser = {
// 	name: 'Kim',
// 	age: 20,
// 	city: 'Seoul',
// };
// const {city, ...user} = seoulUser;
// console.log(city); // Seoul
// console.log(user); // {name: 'Kim', age: 20}

// // destructuring _ 230131
// let user = {
// 	name: 'Kim',
// 	age: 20,
// };

// const showMsg = (user) => {
// 	const {name, age, mail = 'abc@kim.com'} = user;
// 	alert(`저는 ${name} 이고, ${age} 살입니다. 이메일은 ${mail}입니다.`);
// }

// showMsg(user);

// // const showMsg = {{name, age}} => {name} // 바닐라 자바스크립트에서는 안되지만 나중에 프레임워크에서 이런식으로 사용 가능

// // 객체가 여러개인 경우
// let user1 = {
// 	name: 'Kim',
// 	age: 20
// };
// let user2 = {
// 	name: 'Park',
// 	age: 25
// };

// const showMsg = (user) => {
// 	const { name: userName1 } = user1; // 구조 분해하면서 이름 변경
// 	const { name: userName2 } = user2; // 구조 분해하면서 이름 변경
// 	alert(`${userName1}, ${userName2}`);
// }
// showMsg(user1); // Kim, Park

// let user = {
// 	name: 'Kim',
// 	age: 20,
// 	address: {city:'Seoul', street: 'Dongdaemun'}
// };

// const showMsg = (user) => {
// 	const { city, street } = user.address; // 내부 객체까지 비구조할당
// 	alert(`저는 ${city}시 ${street}에 살아요.`);
// }
// showMsg(user); // 저는 Seoul시 Dongdaemun에 살아요.

// // spread -> 새로운 값 생성하기 위한 것
// let user = {
// 	name: 'Kim',
// 	age: 20,
// };

// let busanUser = {
// 	...user, // name: 'Kim', age: 20
// 	city: 'Busan',
// };

// let seoulUser = {
// 	user, // user: {name: 'Kim', age: 20}
// 	city: 'Seoul',
// };

// // spread in array
// let users = ['Kim', 'Park'];
// let newUsers = [...users, 'Lee']; // 배열이 'Kim', 'Park' 이라는 데이터 형태로 펼쳐서 들어감
// console.log(newUsers); // ['Kim', 'Park', 'Lee']

// let users = ['Kim', 'Park'];
// let newUsers = [users, 'Lee']; // 배열 그대로 들어감
// console.log(newUsers); // [['Kim', 'Park'], 'Lee']

// // rest -> 구조분해하면서 데이터를 가져오기 위한 것
// let seoulUser = {
// 	name: 'Kim',
// 	age: 20,
// 	city: 'Seoul'
// };
// const {city, ...user} = seoulUser; // city는 따로 받아오고 나머지는 user로 받겠다
// console.log(city); // Seoul
// console.log(user); // {name: 'Kim', age: 20}

// // rest in array
// let users = ['Kim', 'Park', 'Lee'];
// const [name1, ...rest] = users;
// console.log(name1); // 'Kim'
// console.log(rest); // ['Park', 'Lee'] (배열)

// // spread, rest in function
// const sum = (...num) => { // like python *args. this called rest param.
// 	return num.reduce((sum, current) => sum + current, 0);
// }
// let result = sum(1, 2, 3, 4, 5);
// console.log(result); // 15

// // put array into rest param -> bad result
// const sum = (...num) => {
// 	return num.reduce((sum, current) => sum + current, 0);
// }
// let numbers = [1, 2, 3, 4, 5];
// let result = sum(numbers);
// console.log(result); // 이상하게 작동

// // should use spread syntax
// const sum = (...num) => {
// 	return num.reduce((sum, current) => sum + current, 0);
// }
// let numbers = [1, 2, 3, 4, 5];
// let result = sum(...numbers); // 배열 형태가 아니라, 숫자들이 들어감 1, 2, 3, 4, 5
// console.log(result); // 15

// // 연습문제1 - destructuring
// // 1
// let students = [
// 	{ id: 1, name: 'Kim', score: { math: 50, english: 70 } },
// 	{ id: 2, name: 'Park', score: { math: 80, english: 60 } },
// 	{ id: 3, name: 'Lee', score: { math: 70, english: 50 } },
// ];
// const stuArr = students.filter(student => (student.score.math + student.score.english >= 140));
// console.log(stuArr);

// // 2
// let students2 = [
// 	{ id: 1, name: 'Kim', score: { math: 50, english: 70, science: 60 } },
// 	{ id: 2, name: 'Kim', score: { math: 80, english: 60, science: 100 } },
// 	{ id: 3, name: 'Lee', score: { math: 70, english: 50, science: 40 } },
// ];
// const stuArr2 = students2.reduce((prev, student) => prev + student.score.math + student.score.english + student.score.science, 0);
// let sum = students2.reduce((sum, current) => sum + Object.values(current.score).reduce((sum, current) => sum + current, 0), 0);
// console.log(stuArr2);

// // 3
// let students3 = [
// 	{ id: 1, name: 'Kim', score: { math: 50, english: 70 } },
// 	{ id: 2, name: 'Kim', score: { math: 80, english: 60 } },
// 	{ id: 3, name: 'Lee', score: { math: 70, english: 50 } },
// ]
// students3 = students3.map(student => ({...student, name: 'Park'}));
// console.log(students3);

// // 4
// let students4 = [
// 	{ id: 1, name: 'Kim', score: { math: 50, english: 70, korean: 30, physics: 60 } },
// 	{ id: 2, name: 'Kim', score: { math: 80, english: 60, korean: 40, physics: 40 } },
// 	{ id: 3, name: 'Lee', score: { math: 70, english: 50, korean: 50, physics: 80 } },
// ];
// const filteredStudents = students4.filter(student => student.name === 'Kim').map(student => ({...student, score: {...student.score, science: 100, history: 100,}}));
// console.log(filteredStudents);

// // 연습문제2 - destructuring 2
// // 1
// let students = [
// 	{ id: 1, name: 'Kim', score: { math: 50, english: 70 } },
// 	{ id: 2, name: 'Park', score: { math: 80, english: 60 } },
// 	{ id: 3, name: 'Lee', score: { math: 70, english: 50 } },
// ];
// students = students.map(student => {
// 	const { math, english } = student.score;
// 	return {...student, score: {...student.score, sum: math + english}};
// });
// console.log(students);

// 2
let students2 = [
	{ id: 1, name: 'Kim', score: { math: 50, english: 70 } },
	{ id: 2, name: 'Park', score: { math: 80, english: 60 } },
	{ id: 3, name: 'Lee', score: { math: 70, english: 50 } },
	{ id: 4, name: 'Choi', score: { math: 70, english: 50 } },
];
let sumScore = (...students) => {
	return students.reduce((sum, student) => {
		const { math, english } = student.score;
		return sum + math + english;
	}, 0);
};
console.log(sumScore(...students2));