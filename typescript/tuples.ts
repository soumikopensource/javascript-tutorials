//creating array of my type->tup[le

const tuple: [number,string,boolean]=[23,`soumik`,false];
const enum directions{
up=1,
down=0
};
function usecased(key:number):void{
    if(key===directions.up){
        console.log("up button is pressed");

    }
    else if(key===directions.down){
        console.log("down key is pressed");

    }
}
//interface
const user:User[]=[{firstname: 'soumik',lastname:'dey',marks:100}];
interface User{
    firstname:string,
    lastname:string,
    marks:number
}
//optional field comes last in the function arguement
usecased(1);