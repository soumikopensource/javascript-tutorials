let object1={
    name:"soumik",
    title:"Dey"
}

let object2={
    name:"soumik",
    title:"Kumar"
}
//spread operator
let object3={...object1,testing:false,lastname:"Kumar"};
console.log(object3);

//in case of array this is appended into one another
let arr10=[1,2,3,4];
let arr11=[1,4,6,9];
let arr13=[...arr10,...arr11,11,2];
console.log(arr13);
