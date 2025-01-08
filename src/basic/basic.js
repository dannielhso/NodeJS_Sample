var message = "Hello!";
// Accessing the porperty 'toLowerCase'
// on 'message' and the calling it
message.toLowerCase();
// Calling 'message'
//message(); //변수의 타입만이 아닌 속성까지 체크해준다.
var announcement = "Hello World!";
// How quickly cna you spot the types?
// announcement.toLocalLowercase();
// announcement.toLocaleLowerCase();
// We probably meant to write this...
announcement.toLocaleLowerCase();
var value = Math.random() < 0.5 ? "a" : "b"; // 삼항연산자 true : false
if (value !== "a") {
    // ...
}
else if (value === "a") {
    // Oops, unreachable
}
function flipCoin() {
    // Meant to be Math.random()
    return Math.random() < 0.5;
}
