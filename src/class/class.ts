// Class 이용
class Robot { // Members
    // Property 또는 Field(속성, 필드)
    name: string;
    model: string;
    status: string = "Active";

    // Constructor(생성자) - 인수들을 넘겨 받아 인스턴스를 생성하는 함수
    constructor(name: string, model: string){
        this.name = name;
        this.model = model;
    };

    // Method(행동)
    performTask(task: string){
        console.log(`${this.name} is performing ${task}`);
    };

    updateStatus(newStatus: string){
        this.status = newStatus;
        console.log(`${this.name},'s status is ${this.status}`);
    };
}

// Create Instance of the Robot class;
let r1 = new Robot("R2-he3", "prime");
let r2 = new Robot("R2-sr3", "wave");
let r3 = new Robot("R3-co3", "cross");

// Accessing fields and Calling method;
console.log(r1.name);
console.log(r2.model);
console.log(r3.status);

r1.performTask("Charging");
r2.performTask("Explorering");
r3.performTask("On Repair");


//
class Pet {
    category: string = "Cat";
    name: string = "Chu";

    // 개발자가 생성자를 설정하지 않으면 기본생성자가 작동한다.
    //constructor() {};
}

let p1 = new Pet();
console.log(p1.name);


class User {
    //[필드 부분]
    username: string; // 타입만을 표기하는 경우
    email: string;
    job: string = "Student";

    //[생성자 부분]
    constructor(username: string, email: string){
        this.username = username;
        this.email = email;
    }

    //[메서드 부분]
    study(): void {
        console.log(`${this.username} is studying`);
    }
}

// [객체 생성] (new 키워드와 arguments 입력)
let user1 = new User("하승오", "ha@abcd.ac.kr");
let user2 = new User("홍길동", "hong@example.com");

// [객체의 사용, 접근] ( .도트 연산자 사용 )
// 1. 인스턴스 자체 접근
console.log(user1); // 출력 : User{ username: '하승오', email: 'ha@abcd.kr'}
// 2. 인스턴스의 세부 피드 접근
console.log(user2.username); // 출력 : 홍길동
// 3. 메서드 호출
user1.study();
user2.study();


// 클래스의 상속
class CleaningRobot extends Robot{ // Members
    // Property 또는 Field(속성, 필드)
    cleaningSchedule: string[];

    // Constructor(생성자) - 인수들을 넘겨 받아 인스턴스를 생성하는 함수
    constructor(name: string, model: string, cleaningSchedule: string[]){
        super(name, model);
        this.cleaningSchedule = cleaningSchedule;
    };

    // Method(행동)
    override performTask(){ //부모의 메서드를 재정의 하여 사용한다.
    //performTask(){ // 기본 생성자처럼 숨어있는 함수가 override기능을 사용해준다. 하지만 명시적으로 적어주는게 좋다.
        console.log(`${this.name} is cleaning according to the schedule ${this.cleaningSchedule.join(", ")}`);
    };
}


class CookingRobot{ // Members
    // Property 또는 Field(속성, 필드)
    name: string;
    model: string;
    avilableMenu: string[];
    status: string = "Active";

    // Constructor(생성자) - 인수들을 넘겨 받아 인스턴스를 생성하는 함수
    constructor(name: string, model: string, avilableMenu: string[]){
        this.name = name;
        this.model = model;
        this.avilableMenu = avilableMenu;
    };

    // Method(행동)
    performTask(task: string){
        console.log(`${this.name} is performing ${task}`);
    };

    updateStatus(newStatus: string){
        this.status = newStatus;
        console.log(`${this.name},'s status is ${this.status}`);
    };
    
    performCleaning(){
        console.log(`${this.name} is cleaning according to the schedule ${this.avilableMenu.join(", ")}`);
    }
}
