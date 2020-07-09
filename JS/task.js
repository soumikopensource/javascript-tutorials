//create element
let heading=document.createElement('h3');
heading.setAttribute('id','myId');
heading.setAttribute('class','myClass');
heading.innerHTML="I fell in love with JavaScript";
//embed with your script(existing)
let join=document.querySelector('body');
join.appendChild(heading);

//creating tag outside the heading with href
el1=document.createElement('a');
el1.innerHTML="<b>Go to Soumik</b>";
el1.setAttribute('href','//google.com');
el1.setAttribute('id','anchor');

join.appendChild(el1);