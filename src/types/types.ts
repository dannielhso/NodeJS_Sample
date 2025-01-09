//the primitives
const str:string = "Hello"; // string - 문자열, ""로 감싸서 표현
const num:number = 10; // number - 숫자, int, double 등 세부 타입은 없음.
const bool:boolean = true; // boolean - 논리, true, false

console.log(str.length); // 문자열의 길이 : 5
console.log(str.toUpperCase()); // 문자열을 모두 대문자로 변경 : HELLO

// String, Number, Boolean 는 타입 명시법과 다르니 주의해야 한다.
const wrapperStr = new String(num);


// Array
// ----- 배열의 초기화 방법 -----
let arrayOfNumbers1:number[];
arrayOfNumbers1 = [5];
arrayOfNumbers1 = [5, 10, 30];
// [5] , [5, 5, 10, 30] XXX
// [5, 10, 30]

console.log(arrayOfNumbers1[0]) // 5
console.log(arrayOfNumbers1[1]) // 10
console.log(arrayOfNumbers1[2]) // 30

let arrayOfNumbers2: Array<number>;
arrayOfNumbers2 = [6];
arrayOfNumbers2 = [6, 8, 20];
console.log(arrayOfNumbers2[2]); // 20

// 해당 타입 요소만 허용되는 배열 = 튜플이므로 선언 주의
//let singleNumberTuple: [number, number];
//singleNumberTuple = [5, 12];


// 함수의 명시적 타입 지정 방법 (매개변수 / Parameter)
function greeter1(name:string):string{  // 반환 타입 지정을 습관화 하자.
    return "Hello, " + name;
}
console.log(greeter1("Tom"));


// 객체 타입 ( 여러 속성을 가진 타입 ) - 계층 구조로 접근한다.
const car = {
    color : 'red', // 쉼표로 각 속성을 나눈다.
    model : 'Sedan',
    manufacturer : 'Toyota',
}

console.log(car.color);

// 구분자를 , 또는 ; 로 사용 할 수 있음.
function printOutPut(pt: {x: number, y: number}){
    console.log("The X value is : " + pt.x);
    console.log("The Y value is : " + pt.y);
}

// 객체의 선택적 속성
function printName(user: { first : string, last : string}){
    if( user.last !== undefined ){
        console.log("Your First name is " + user.first.toUpperCase());
        console.log("Your Last name is " + user.last.toUpperCase());
    } else {
        console.log("Your name is " + user.first.toLowerCase());
    }
}

printName({first: "Bob", last: "Chris"});