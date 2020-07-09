//alternative to async await


function bringBread() {
    //tasks
    
}




async function final(){
    try{
    const myData=await bringBread();
    return myData;
    }
    catch(e){
        return Promise.reject(e);
    }

}
final().then(function(){
    console.log(final());
}).catch(err=>{
    console.log(err);
});