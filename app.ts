console.log("Hello")
//명시적 타입 선언언
let a:number = 10;//숫자 number
let b:string = "Hello";//문자열 String
let c:boolean = true;//참,거짓 Boolean
let d:number[] = [1,2,3,4];//배열 Array 
let e:Person = { name : "Tom", age : 35};//객체 Object 
//참조변수는 모두 Object로 인식한다.

interface Person{
    name:string;
    age:number;
}

a = 55;
b = "50";

console.log("a : " + a, ", typeof " + typeof a);
console.log("b : " + b, ", typeof " + typeof b);
console.log("c : " + c, ", typeof " + typeof c);
console.log("d[0] : " + d[0], ", d[1] : " + d[1], ", d[2] : " + d[2], ", d[3] : " + d[3],", typeof " + typeof d);
console.log("e.name : " + e.name, ", e.age : " + e.age, ", typeof " + typeof e);

//예시

let columnLength = 10;

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

let addLength = columnLength + 5;
let meterLength = addLength / 100;

//.. 개발 진행 과정..
//.. 개발 진행 과정..
//.. 개발 진행 완료

console.log(addLength);
console.log(meterLength);