let age=20;
if(age==12){
    console.log("age matched");
}
else if(age==20){
    console.log("age matched")
}
else{
    console.log("sorry!!");
}
//== is for only value checking use === for value and type checking... and !==
let doesdrive=true;
if(doesdrive){
    console.log("you can drive");
}
//ternary operator
let age=23;
if(age==23?"ya it is":"no it's not");
//switch case
//use break as per your need
switch (age) {
    case 18:
        console.log("you are 18");
        break;
    case 22:
        console.log("you are 22");
    default:
        console.log("you are dumbass");
        break;
}