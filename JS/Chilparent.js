console.log("children parent");
//let cont=document.querySelector('.no');
//cont=document.querySelector('.container');
//child access
//console.log(cont.children);//or can use childNodes it includes comments and new line
//accessing node name
//Nodetypes
/*1->Element
2->attribute
3->text
8->comment
9->document
10->doctype
*/
//nodename
//let nodetype=cont.childNodes[8].nodeType;
//console.log(nodetype);
let container=document.querySelector('div.container');
console.log(container.children[0].children);
console.log(container.firstChild);
console.log(container.firstElementChild);
//lastChild
//lastElementChild
//childElementCount
//nextElementSibling



