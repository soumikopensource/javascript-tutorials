
//set a key , value inside local storage
localStorage.setItem('name','soumik');
localStorage.setItem('name','rohan');
let item=localStorage.getItem('name');
console.log(item);
//clears the entire local storage
//localStorage.clear();
//you cannot add arrays
let a=[1,2,3,4];
//to create array
arr=localStorage.setItem('Number',JSON.stringify(a));
console.log(arr);
//retrieve the array elements
item=JSON.parse(localStorage.getItem('1'));
console.log(item);
//you can store objects also
//different storage has different name

//SessionStorage
//ends with a session
sessionStorage.setItem('name','soumik');
sessionStorage.setItem('name','rohan');
sessionStorage.clear();




