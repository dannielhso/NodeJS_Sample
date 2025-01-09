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
// Class 이용
var Robot = /** @class */ (function () {
    // Constructor(생성자) - 인수들을 넘겨 받아 인스턴스를 생성하는 함수
    function Robot(name, model) {
        this.status = "Active";
        this.name = name;
        this.model = model;
    }
    ;
    // Getter for name
    Robot.prototype.getName = function () {
        return this.name;
    };
    Robot.prototype.getModel = function () {
        return this.model;
    };
    Robot.prototype.getStatus = function () {
        return this.status;
    };
    // Method(행동)
    Robot.prototype.performTask = function (task) {
        console.log("".concat(this.name, " is performing ").concat(task));
    };
    ;
    Robot.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, ",'s status is ").concat(this.status));
    };
    ;
    return Robot;
}());
// Create Instance of the Robot class;
var r1 = new Robot("R2-he3", "prime");
var r2 = new Robot("R2-sr3", "wave");
var r3 = new Robot("R3-co3", "cross");
// Accessing fields and Calling method;
console.log(r1.getName());
console.log(r2.getModel());
//console.log(r3.status);
r1.performTask("Charging");
r2.performTask("Explorering");
r3.performTask("On Repair");
//
var Pet = /** @class */ (function () {
    function Pet() {
        this.category = "Cat";
        this.name = "Chu";
        // 개발자가 생성자를 설정하지 않으면 기본생성자가 작동한다.
        //constructor() {};
    }
    return Pet;
}());
var p1 = new Pet();
console.log(p1.name);
var User = /** @class */ (function () {
    //[생성자 부분]
    function User(username, email) {
        this.job = "Student";
        this.username = username;
        this.email = email;
    }
    //[메서드 부분]
    User.prototype.study = function () {
        console.log("".concat(this.username, " is studying"));
    };
    return User;
}());
// [객체 생성] (new 키워드와 arguments 입력)
var user1 = new User("하승오", "ha@abcd.ac.kr");
var user2 = new User("홍길동", "hong@example.com");
// [객체의 사용, 접근] ( .도트 연산자 사용 )
// 1. 인스턴스 자체 접근
console.log(user1); // 출력 : User{ username: '하승오', email: 'ha@abcd.kr'}
// 2. 인스턴스의 세부 피드 접근
console.log(user2.username); // 출력 : 홍길동
// 3. 메서드 호출
user1.study();
user2.study();
// 클래스의 상속
var CleaningRobot = /** @class */ (function (_super) {
    __extends(CleaningRobot, _super);
    // Constructor(생성자) - 인수들을 넘겨 받아 인스턴스를 생성하는 함수
    function CleaningRobot(name, model, cleaningSchedule) {
        var _this = _super.call(this, name, model) || this;
        _this.cleaningSchedule = cleaningSchedule;
        return _this;
    }
    ;
    // Method(행동)
    CleaningRobot.prototype.performTask = function () {
        //performTask(){ // 기본 생성자처럼 숨어있는 함수가 override기능을 사용해준다. 하지만 명시적으로 적어주는게 좋다.
        console.log("".concat(this.getName(), " is cleaning according to the schedule ").concat(this.cleaningSchedule.join(", ")));
    };
    ;
    return CleaningRobot;
}(Robot));
var CookingRobot = /** @class */ (function () {
    // Constructor(생성자) - 인수들을 넘겨 받아 인스턴스를 생성하는 함수
    function CookingRobot(name, model, avilableMenu) {
        this.status = "Active";
        this.name = name;
        this.model = model;
        this.avilableMenu = avilableMenu;
    }
    ;
    // Method(행동)
    CookingRobot.prototype.performTask = function (task) {
        console.log("".concat(this.name, " is performing ").concat(task));
    };
    ;
    CookingRobot.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, ",'s status is ").concat(this.status));
    };
    ;
    CookingRobot.prototype.performCleaning = function () {
        console.log("".concat(this.name, " is cleaning according to the schedule ").concat(this.avilableMenu.join(", ")));
    };
    return CookingRobot;
}());
// 접근 제어자 Visibility modifier / Access Modifier
// public - protected - 
//(default) 타입 스크립트에서는 퍼블릭이 디폴트값이다.
// public : 모든 클래스에서 접근 가능 (기본값)
// protected : 같은 클래스와 자식 클래스에서 접근 가능
// private : 해당 클래스 내에서만 접근 가능
var c1 = new CleaningRobot("ABC-13", "Prime", ["Sunday", "Monday"]);
console.log(c1.cleaningSchedule);
c1.performTask();
console.log(c1.getName());
