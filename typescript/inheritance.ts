class Animal{
    move(run:number){
        console.log("running"+run+"kms");
    }
}

class Dog1 extends Animal{
    bark1(){
        console.log("dog is barking");
    }

}
let m=new Dog1();
m.bark1();
m.move(2);


