//the primitives
var str = "Hello"; // string - 문자열, ""로 감싸서 표현
var num = 10; // number - 숫자, int, double 등 세부 타입은 없음.
var bool = true; // boolean - 논리, true, false
console.log(str.length); // 문자열의 길이 : 5
console.log(str.toUpperCase()); // 문자열을 모두 대문자로 변경 : HELLO
// String, Number, Boolean 는 타입 명시법과 다르니 주의해야 한다.
var wrapperStr = new String(num);
// Array
// ----- 배열의 초기화 방법 -----
var arrayOfNumbers1;
arrayOfNumbers1 = [5];
arrayOfNumbers1 = [5, 10, 30];
// [5] , [5, 5, 10, 30] XXX
// [5, 10, 30]
console.log(arrayOfNumbers1[0]); // 5
console.log(arrayOfNumbers1[1]); // 10
console.log(arrayOfNumbers1[2]); // 30
var arrayOfNumbers2;
arrayOfNumbers2 = [6];
arrayOfNumbers2 = [6, 8, 20];
console.log(arrayOfNumbers2[2]); // 20
// 해당 타입 요소만 허용되는 배열 = 튜플이므로 선언 주의
//let singleNumberTuple: [number, number];
//singleNumberTuple = [5, 12];
// 함수의 명시적 타입 지정 방법 (매개변수 / Parameter)
function greeter1(name) {
    return "Hello, " + name;
}
console.log(greeter1("Tom"));
// 객체 타입 ( 여러 속성을 가진 타입 ) - 계층 구조로 접근한다.
var car = {
    color: 'red', // 쉼표로 각 속성을 나눈다.
    model: 'Sedan',
    manufacturer: 'Toyota',
};
console.log(car.color);
// 구분자를 , 또는 ; 로 사용 할 수 있음.
function printOutPut(pt) {
    console.log("The X value is : " + pt.x);
    console.log("The Y value is : " + pt.y);
}
// 객체의 선택적 속성
function printName(user) {
    if (user.last !== undefined) {
        console.log("Your First name is " + user.first.toUpperCase());
        console.log("Your Last name is " + user.last.toUpperCase());
    }
    else {
        console.log("Your name is " + user.first.toLowerCase());
    }
}
printName({ first: "Bob" });
// Any 타입 - 오류를 회피하기 위한 임시방편처럼 작동 ( 타입 검사 적용 안함함 )
var object = { x: 0 };
object.foo();
object();
object.bar = 100;
object = "hello";
var n = object;
// Union 타입 - 단일 책임 원칙에 어긋나니 사용을 자제하라.
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(typeof id);
    }
}
function printIdStr(id) {
    console.log(id.toUpperCase());
}
printId(10);
printId("Hello");
// Type Alias & Interface
function printCoord(point) {
    console.log("The coordinate's x value is : " + point.x);
    console.log("The coordinate's y value is : " + point.y);
}
printCoord({ x: 100, y: 200 });
