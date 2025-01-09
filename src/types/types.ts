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
function printName(user: { first : string, last ?: string}){
    if( user.last !== undefined ){
        console.log("Your First name is " + user.first.toUpperCase());
        console.log("Your Last name is " + user.last.toUpperCase());
    } else {
        console.log("Your name is " + user.first.toLowerCase());
    }
}

printName({first: "Bob"});

// Any 타입 - 오류를 회피하기 위한 임시방편처럼 작동 ( 타입 검사 적용 안함함 )
let object: any = { x:0 };
/*
object.foo();
object();
object.bar = 100;
object = "hello";
const n:number = object;
*/

// Union 타입 - 단일 책임 원칙에 어긋나니 사용을 자제하라.
function printId(id: ID){ // or
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    } else {
        console.log(typeof id);
    }
}
function printIdStr(id:string){ // 이런 식으로 하나의 기능만을 수행하도록 한다.
    console.log(id.toUpperCase());
}
// 타입 별칭으로도 Union 같이 다른 타입들도 커스텀 가능.
type ID = number | string;
printId(10);
printId("Hello");


// Type Alias & Interface
function printCoord(point: point){
    console.log("The coordinate's x value is : " + point.x);
    console.log("The coordinate's y value is : " + point.y);
}
function calculateDistance(point1: point, point2: point){
    const locationX = point2.x - point1.x;
    const locationY = point2.y - point1.y;
    return Math.sqrt(locationX ** 2 + locationY ** 2);
}
printCoord({ x:100, y:200 });
// 해당 객체의 속성이 같다면, 하지만 파라미터가 point1,2,3 ... 255 까지 늘어난다면 계속해서 중복코드가 늘어남.

// 사용자 정의 타입을 사용 할 수 있음.
type point = {
    x: number,
    y: number
}