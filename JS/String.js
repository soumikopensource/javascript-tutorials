console.log("we are at string");
let html;
html="<h1>This is header</h1>"+
    "<p>This is a paragraph</p>";
//concat method
html=html.concat("concat this also");
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html[0]);
//indexOf()
//charAt()
//endsWith()
//lastIndexOf()
//includes()
// will work with htmlscripts and DOM
//substring()
//slice(-4)
//split() returns as an array
//replace() replaces first occurances
let myHtml='yfgjgkgffg';
let fruits="orange";
//template literals ES6 FEATURES use of backticks
let myHtml1=`<h1>This is ${myHtml}</h1> 
<p> I likle ${fruits}

</p>
`;
document.body.innerHTML=myHtml1;