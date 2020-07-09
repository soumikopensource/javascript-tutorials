console.log("welcome to dom");
let a=document;
//console.log(a);
//it is like representation of your whole html script which you can see and manipulate by methods...
//Dom is a tree structure, it has child 
a=document.all;//returns html collections
//a=document.forms[0];
/*Array.from(a).forEach(function(element){
    console.log(element);
})*/
//console.log(a);
//a=document.body;
//a=document.links[0].href;
//a=document.images[0].href;
let b=document.scripts;
if(b){
    alert("This page has scripts");
}
/*var urls=[];
for(var i=document.links.length;i>0;i--){
    urls.push(document.links[i].href);
}*/
let links=document.links;  //error to crawling
for(let index=0;index<=links.length;index++){
   if((links[index]).attr("href").includes("google"))
   {
       document.write(links[index].href);
   } 
}
/*let js=document.links;
Array.from(js).forEach(function(elements){
    if(elements.href.match('rohan'))
    {
        console.log(elements.href);
    }
});*/