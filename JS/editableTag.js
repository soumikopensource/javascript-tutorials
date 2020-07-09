
// 1st Task
let divTag=document.createElement('div');
divTag.setAttribute('id','myId');
document.body.appendChild(divTag);
let newHeader=document.createElement('h3');
newHeader.setAttribute('id','head');
newHeader.innerHTML="Code With Soumik";
divTag.appendChild(newHeader);

//2nd Task
//editable Tag Ceration
let inputElement=document.createElement('input');
inputElement.id='inputId';
divTag.appendChild(inputElement);


//Add Event Listener & LocalStorage
let element=document.getElementById('inputId');
element.addEventListener('blur',function(){
    localStorage.setItem('newValue',element.value);

})

