
//very important

let element=document.createElement('li');
//add a class to integrate the list in the script
element.className='ulist';
element.id="newid";
//you can set attribute
element.setAttribute('title','myTitle');
console.log(element);
element.innerHTML="<b>hello created by Soumik!!</b>";
// ulist created 
//have to fit into DOM the new li tag
ul=document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
let Text=document.createTextNode("hello changed");
element.appendChild(Text);

//replacing an element
//first create
let el=document.createElement('h3');
el.id='id';
el.className='class';
let text2=document.createTextNode("replace karo humko");
el.appendChild(text2);
//replace
element.replaceWith(el);

let myul=document.getElementById('yy');
myul.replaceChild(element,document.getElementById('fui'));

//remove child
myul.removeChild(document.getElementById('lui'));

let pr=el.getAttribute('id');
console.log(el,pr);
//hasAttribute
//removeAttribute
