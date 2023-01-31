// // prototype
// Object.prototype.toString = () => { // 실제로는 prototype을 수정하는 건 드문 일
//     return '오브젝트';
// }
// let obj = new Object();
// alert(obj)

// // prototype 상속
// let player = {
//     hp: 50,
// };

// let warrior = {
//     ap: 20,
//     mp: 0,
// };

// let warriorSp = {
//     ...player,
//     ap: 20,
//     mp: 0,
// }

// let superWarrior = {
//     skill() {
//         alert('스킬을 사용한다.')
//     },
//     __proto__: warrior,
// }

// warrior.__proto__ = player; // 자동으로 warrier가 player를 상속받음
// console.log(warrior); // hp가 prototype에 들어가게 됨
// console.log(warriorSp); // 직접 값이 warrierSp에 복사됨
// console.log(superWarrior); // prototype chaining (중첩 프로토타입)

// // 상속에서의 this -> this는 실행된 context에 따라 달라짐 . 앞에 있는 객체를 말하는 것
// let player = {
//     hp: 50,
//     checkHp() {
//         alert(`나는 체력이 ${this.hp} 남았어`)
//     }
// };
// let warrior = {
//     hp: 70,
//     __proto__: player
// };
// let superwarrior = {
//     hp: 100,
//     __proto__: warrior
// };
// warrior.checkHp(); // 나는 체력이 70 남았어
// superwarrior.checkHp(); // 나는 체력이 100 남았어

// // prototype, 반복문 -> for in 문을 사용할 것!
// let player = {
//     hp: 50
// };
// let warrior = {
//     ap: 20,
//     mp: 0,
//     __proto__: player
// };

// console.log(Object.keys(warrior)); // ap, mp
// console.log(Object.values(warrior)); // 20, 0
// console.log(Object.entries(warrior)); // [ap, 20], [mp, 0]

// for (let prop in warrior) {
// 	console.log(prop); // ap, mp, hp
// }

// // 생성자 함수와 프로토타입
// let player = {
//     hp: 50
// };
// function Warrior(name) {
//     this.name = name;
//     this.__proto__ = player;
// }
// let warrior = new Warrior("전사");
// console.log(warrior.hp); // 50

// // 연습문제 - prototype
// // 1
// let employee = {
//     clockIn: function() {
//         console.log('출근');
//     },
//     clockOut: function() {
//         console.log('퇴근');
//     },
// };
// let kim = {
//     name: 'Kim',
//     age: 20,
//     __proto__: employee,
// };
// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
//     this.__proto__ = employee;
// }
// let person = new Employee("jingnii", 22);
// console.log(person);

// // class -> type of class는 function임
// class User {
// 	constructor(name, age) { // 이 클래스로 객체를 생성할 때는 name과 age를 명시해야
//         this.name = name;
//         this.age = age;
// 	}
//     sayHi() {
//         alert(`안녕하세요 저는 ${this.name} 입니다.`)
//     }
// }
// let kim = new User('Kim', 20); // 여기 작성한 인자가 constructor 에 들어가서 데이터 프로퍼티에 할당
// kim.sayHi(); // 안녕하세요 저는 Kim 입니다.

// // getter, setter
// class User {
//     constructor(name, age) {
//         this.name = name,
//         this.age = age // 생성자를 통해서 age 에 값이 지정되는 순간 setter 실행
//     }
//     get age() {
//         return this._age;
//     }
//     set age(value) {
//         if (value <= 0) {
//             alert('나이는 0보다 커야 합니다.');
//             return;
//         }
//         return this._age = value;
//     }	
// };
// let kim = new User('Kim', 0); // 나이는 0보다 커야 합니다.
// kim.age = 10;
// console.log(kim.age); // 10, getter 를 통해서 _age 에 저장된 값 실행

// // 클래스 필드: 곧바로 property를 class에 명시하는 기능
// class SeoulUser {
//     city = 'Seoul';

//     constructor(name, age) {
//         this.name = name,
//         this.age = age // 생성자를 통해서 age 에 값이 지정되는 순간 setter 실행
//     }
// };
// let user = new SeoulUser('Kim', 10);
// console.log(user);

// // class 상속
// class Player {
// 	constructor(hp, mp) {
// 		this.hp = hp;
// 		this.mp = mp;
// 	}
// 	checkHp() {
// 		alert(`${this.hp} 남았다!`)
// 	}
// }
// class Warrior extends Player {
// 	attack() {
// 		alert(`공격!`)
// 	}
// }
// let warrior = new Warrior(100, 50);
// warrior.attack(); // 공격!
// warrior.checkHp(); // 100 남았다!
// console.log(warrior); // hp: 100, mp: 50

// // 연습문제 - class
// class Employee {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     clockIn(){
//         alert("출근");
//     }
//     clockOut(){
//         alert("퇴근");
//     }
// }

// class Producer extends Employee {
//     produce() {
//         alert("기획");
//     }
// }

// class Developer extends Employee {
//     develop() {
//         alert("개발");
//     }
// }

// let producer = new Producer("producer", 33);
// let developer = new Developer("dev", 44);
// console.log(producer, developer);

// // error control
// alert('안녕');
// alert(none); // 에러 발생
// alert('잘가'); // 수행하지 않음

// // try catch
// try {
//     console.log(none); // none 이라는 변수는 없음
//     console.log('이 부분은 실행되지 않음') // 위에서 에러가 발생했으니 실행 X
// } catch (err) {
//     console.log(err);
// }

// try {
//     console.log(none); // none 이라는 변수는 없음
//     console.log('이 부분은 실행되지 않음') // 위에서 에러가 발생했으니 실행 X
// } catch (err) {
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
// }

// // 아래의 상황에서는 에러가 발생하지 않고 undefined라고 표시가 됨
// let successData = {name: 'Kim', age: 30}; // 완전한 데이터
// let errorData = {age: 30}; // 불완전한 데이터

// let dataShow = (data) => {
// 	alert(data);
// };

// try {
// 	dataShow(errorData.name); // undefined
// } catch (err) {
// 	console.log(err);
// }

// // 위의 경우에 대해 throw문을 이용해 error를 발생시킬 수 있음
// try {
// 	if (!errorData.name) {
// 		throw new SyntaxError('data err: undefined name'); // 에러 발생시키기
// 	}
// 	dataShow(errorData.name); // 위에서 throw를 하므로 여기는 실행되지 않음
// } catch (err) {
// 	console.log(err); // throw한 것 여기서 잡음. err 대처 코드 작성
// }

// // finally
// try {
//     alert('try');
//     if (confirm('에러를 발생시킬까요?')) 없는함수();
// } catch (e) {
//     alert('catch');
// } finally {
//     alert('finally');
// }

// 실습: 계산기 만들기
class Calculator {
    history = [];

    constructor(num) {
        this.resultNumber = num;
    }
    get resultNumber() {
        return this._resultNumber;
    }
    set resultNumber(num) { // history 에다가 지금 결과값 저장
        this._resultNumber = num; // setter 가 실행
        this.history = [...this.history, num];  // array에 값을 추가할 때에는 pop보다는 spread를 사용하는 게 좋음
    }
    
    sum(num) {
        this.resultNumber += num; // setter 가 실행
    }
    sub(num) {
        this.resultNumber -= num;
    }
    mul(num) {
        this.resultNumber *= num;
    }
    div(num) {
        this.resultNumber /= num;
    }
    undo() {
        this.resultNumber = this.history[this.history.length - 2];
        this.history = this.history.slice(0, this.history.length - 2);
    }
}