var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// 1. 추론적 타입 지정
var x = 3;
//x = [0, 1, null];
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Elephant = /** @class */ (function (_super) {
    __extends(Elephant, _super);
    function Elephant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasTrunk = true;
        return _this;
    }
    return Elephant;
}(Animal));
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasHorn = true;
        return _this;
    }
    return Rhino;
}(Animal));
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasLegs = false;
        return _this;
    }
    return Snake;
}(Animal));
var zoo = [new Rhino(), new Elephant(), new Snake()];
// Animal[] 추론 추측, 그러나 다른 타입이 지정됨.
// 2.명시적 타입 지정 (Explict Types)
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
greet("Brendan", new Date());
