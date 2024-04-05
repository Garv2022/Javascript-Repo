//object
const student = {
    fullname : "Garv",
    marks : 20,
    printMarks : function(){
        console.log("marks =", this.marks); //student.marks
    },
    printMarks() {
        console.log("marks =", this.marks); //student.marks
    },
};

arjunKaran = {
    salary : 400,
};

//prototype creation 
arjunKaran.__proto__ = student;

//class
class ToyotaCar {
    
    constructor(brand, milage) {
        console.log("creating new object");
        this.brand = brand;
        this.milage = milage; 
    }

    setBrand(brand){
        this.brand = brand; // this.brand : obj ka brand , brand : variable of func
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }


}

let fortuner = new ToyotaCar(); //constructor
let lexus = new ToyotaCar(); //constructor

 //Inheritance
class Person{
    constructor(){
        console.log("enter parent constructor");       
        this.species = "homo-sapiens";
    }

    eat(){
        console.log("eat"); 
    }

    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
    
    constructor(branch){
        console.log("enter child constructor");
        super(); //to invoke parent class instructor
        this.branch = branch;
    }

    work(){
        console.log("solve problems, build things");
    }
}

class Doctor extends Person{
    work(){
        console.log("treat patients");
    }
}

let engObj = new Engineer();

let enjObj2 = new Engineer("chemical eng");  //super ka use

class Person2{
    constructor(name){
        this.species = "homo-sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
}

class Doctor extends Person2{
    
    constructor(name){
        super(name);
    }

    work(){
        super.eat();
        console.log("treat patients");
    }
}



//Q1

let DATA = "secret info";
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data=", DATA);

    }
}

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "some new value";
    }
}


let student1 = new User("garv", "abc@gmail.com");
let student2 = new User("aman", "aman@gmail.com");

let admin1 = new Admin("admin", "admin@gmail.com");
//viewData();

