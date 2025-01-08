//the primitives
var str = "Hello"; // string - 문자열, ""로 감싸서 표현
var num = 10; // number - 숫자, int, double 등 세부 타입은 없음.
var bool = true; // boolean - 논리, true, false
console.log(str.length); // 문자열의 길이 : 5
console.log(str.toUpperCase()); // 문자열을 모두 대문자로 변경 : HELLO
// String, Number, Boolean 는 타입 명시법과 다르니 주의해야 한다.
var wrapperStr = new String(num);
// Array
var arrayOfNumbers1;
arrayOfNumbers1 = [5];
arrayOfNumbers1 = [5, 10, 30];
console.log(arrayOfNumbers1[0]); // 5
console.log(arrayOfNumbers1[1]); // 10
console.log(arrayOfNumbers1[2]); // 30
