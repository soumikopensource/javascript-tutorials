//dom selector

//singleline selector
console.log("chalo element selector sikhte h");
let element=document.getElementById('myfirst')
console.log(element);
//element=element.className;
//console.log(element);
//element=element.childNodes;
//console.log(element);
//element=element.parentNode;
//console.log(element);
//element.style.color='red';//you can css styles using javascript
//console.log(element);
//element.innerHTML="<b>soumik is awesome</b>";
//queryselector

let a=document.querySelector('h1');
//multi element selector
//let elems=document.getElementsByClassName('.container');
//console.log(elems[0].getElementsByClassName('.child'));//use [] for accessing particular
elems=document.getElementsByTagName('div');
console.log(elems);
//iterate over all the divs and change the property of every div tag
/*Array.from(elems).forEach(element => {
    element.style.color='blue';
});*/
//using for loop
for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color='red';
}


