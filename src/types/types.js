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
/*
object.foo();
object();
object.bar = 100;
object = "hello";
const n:number = object;
*/
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
function calculateDistance(point1, point2) {
    var locationX = point2.x - point1.x;
    var locationY = point2.y - point1.y;
    return Math.sqrt(Math.pow(locationX, 2) + Math.pow(locationY, 2));
}
printCoord({ x: 100, y: 200 });
var myJob = {
    title: "SW Engineer",
    company: "Tech", // , ,를 붙이는게 다음 코드를 이어나갈 떄 좋다.
};
// 타입 단언 Type Assertions
var apiResponse = {
    id: 1,
    title: "TypeScript Begins",
    content: "This is contents of Article",
};
// Error 지만 찾지 못하는 경우(any)
console.log(apiResponse.like);
//Type assertions using 'as' keyword
var content1 = apiResponse;
//Type assertions using <> bracket syntax
var content2 = apiResponse;
//console.log(content1.like); // 오류를 찾아낸다. like does not exist
console.log(content2.content); // OK
console.log(content2.id); // OK
// 리터럴 타입
function printText(s, alignment) {
}
printText("Hello, world", "left"); // 오타의 위험성이 크기 때문에 실제로 잘 사용되지 않는다.
//printText("Hello, world", "contre"); // 특정 값을 타입화 하는 것이지만, 재사용성이 떨어져서 다음으로 대체한다.
// Enum 열거형 타입 사용
// 진행 상태 start/progress/end
function checkDayType() {
    var currentDay = new Date().getDay();
    var isWorkoutDay = currentDay === Day.Tuesday || currentDay === Day.Thurday;
    var isWeekend = currentDay === Day.Sunday || currentDay === Day.Saturday;
    var isWorkingDay = currentDay !== Day.Sunday && currentDay !== Day.Saturday &&
        currentDay !== Day.Monday && currentDay !== Day.Wednesday;
    console.log("Today is day number ".concat(currentDay, "."));
    console.log("Is today a workout day? ".concat(isWorkoutDay, "."));
    console.log("Is today a weekend day? ".concat(isWeekend, "."));
    console.log("Is today a working day? ".concat(isWorkingDay, "."));
}
// 과연 각 숫자들의 의미는 정확이 무엇을 의미하는지 불확실 하다.
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thurday"] = 4] = "Thurday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
checkDayType();
