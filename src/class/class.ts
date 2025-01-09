// Class 이용
class Robot { // Members
    // Property 또는 Field(속성, 필드)
    name: string;
    model: string;
    status: string = "Active";

    // Constructor(생성자) - 파라미터들을 넘겨 받아 인스턴스를 생성하는 함수수
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

