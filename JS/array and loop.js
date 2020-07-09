let marks=[23,45,67];
//const fruits=[`orange`,`mango`];
const mixed=[23,`soumik`,[3,5]];
const arr=new Array(12,123,21,`orange`);
console.log(arr);

//property
//method
//arr.length ->property
//Array.isArray() ->method
//you can change and access values of the array
//indexOf() method
let result=marks.indexOf(23);
let modify=marks.push(12);
let pop=marks.pop();
//unshift
let remove=marks.splice(1,2);//remove two elements from 2nd location
let marks2=[1,2,3,4];
marks=marks.concat(marks2);
console.log(marks);
let a=[3,4,5,6];
a.forEach(element => {
    console.log(element);
});

