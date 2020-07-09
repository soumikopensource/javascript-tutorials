console.log("hello");
//add event
/*document.getElementById('heading').addEventListener('mouseover', function (e) {
    console.log("you have clicked");
    let variable;
    variable = Array.from(e.target.classList);
    variable=e.offsetX;
    //distance from browser window
    variable=e.clientX;
    console.log(variable);
    //location.href="//google.com";
});*/
/*let btn=document.getElementById('button1').addEventListener('click',func1);
//mousedown event
btn.addEventListener('mousedown',func3);
//mouseenter
btn.addEventListener('mouseenter',func4);
function func1(e){
    console.log("thanks",e);
    e.preventDefault();
}
function func3(e){
    console.log("its a mousedown",e);

    e.preventDefault();
}
function func4(e){
    console.log("you entered",e);
}*/
//mousemove
//mouseleave
let a=document.querySelector('.container');
a.addEventListener('mousemove',function(e){ 
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetX})`;
    console.log("you triggered mousemove event");});

