let today=new Date();
//today is an object
console.log(today);
let otherdate=new Date('8-1-2020 04:50:10');
console.log(otherdate);
let a;
a=otherdate.getDay();
console.log(a);
a=otherdate.getDate();
a=otherdate.getMinutes();
a=otherdate.getTime(); //no of seconds till 1 Jan of that year
a=otherdate.getMonth();
otherdate.setDate(23);
console.log(otherdate);
//you can set month and year also

