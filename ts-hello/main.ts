// first program
function greet(msg){
    console.log(msg);
}

let msg = "greetings!"
greet(msg);

// declaring variables
// let vs var
function test(){
    for (var i = 0; i < 5; i++) {
       console.log(i); 
    }
    console.log("finally: " +i);
}
test();

//types
let age:number;
age = 25;
let firstName:string;
let departments:string[]=["CSE","EEE","BBA"];

let isTrue:boolean = false;

enum Colors{Red= 0,Green=1, Blue=2, Purple= 3};

let backgroundColor= Colors.Blue;
console.log(backgroundColor);

// type assertion
let message;
message ="acbd";

let endsWithD = (<string>message).endsWith("d");
let alternativeWay = (message as string).endsWith("d");
console.log(endsWithD);
console.log(alternativeWay);

// Arrow functions
let doLog = greetings => console.log(greetings);
let greetings :string = "Morning!";
doLog(greetings);


let sum = (num1,num2)=>{
    console.log(num1+num2);
};
let num1:number=10;
let num2:number =90;
sum(num1,num2);


// interfaces 
interface Point{
    x:number,
    y:number
} 
let drawPoint =(point:Point)=>{
    console.log("X: " + point.x + " Y: " + point.y)
}
// drawPoint({
//     x:1,
//     y:9
// })

// classes and objects
class Point{
    x:number;
    y:number;

    drawPoint(){
        console.log("X: " + point.x + " Y: " + point.y)
    }

    getDistance(point:Point){
        console.log(point.x - point.y)
    }
}

let point = new Point();
point.x=100;
point.y=60
point.drawPoint();









