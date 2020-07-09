
//primitive
let y=10;
let z=y;
console.log(y,z,`first time`);
y=20;
console.log(y,z,'second time');


//reference type
//object is a reference model typer
let user1={
firstname:"sammy",
lastname:"lastname"
};
let user2=user1;
console.log(user1,user2,'before');
user1.firstname='samsundar';
console.log(user1,user2,'after');
