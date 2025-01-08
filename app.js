console.log("Hello");
//명시적 타입 선언언
var a = 10; //숫자 number
var b = "Hello"; //문자열 String
var c = true; //참,거짓 Boolean
var d = [1, 2, 3, 4]; //배열 Array 
var e = { name: "Tom", age: 35 }; //객체 Object 
a = 55;
b = "50";
console.log("a : " + a, ", typeof " + typeof a);
console.log("b : " + b, ", typeof " + typeof b);
console.log("c : " + c, ", typeof " + typeof c);
console.log("d[0] : " + d[0], ", d[1] : " + d[1], ", d[2] : " + d[2], ", d[3] : " + d[3], ", typeof " + typeof d);
console.log("e.name : " + e.name, ", e.age : " + e.age, ", typeof " + typeof e);
//예시
var columnLength = 10;
//.. 개발 진행 과정..
//.. 개발 진행 과정..
//.. 개발 진행 과정..
//.. 개발 진행 과정..
//.. 개발 진행 과정..
//.. 개발 진행 과정..
//.. 개발 진행 과정..
//.. 개발 진행 과정..
//.. 개발 진행 과정..
columnLength = 30;
//.. 개발 진행 과정..
//.. 개발 진행 과정..
//.. 개발 진행 과정..
var addLength = columnLength + 5;
var meterLength = addLength / 100;
//.. 개발 진행 과정..
//.. 개발 진행 과정..
//.. 개발 진행 완료
console.log(addLength + "m");
console.log(meterLength + "m");
//---------------                (반환 타입)
function add(x, y) {
    return x + y;
}
