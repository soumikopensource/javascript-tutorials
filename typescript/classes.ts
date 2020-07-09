class Dog {
    //accessable to every Dog object
    //similar to every object created by Dog
    static a="soumik";
    bark() {
        console.log("dog is barking");
    }

}
class Snake {
    bite() {
        console.log("Snake is biting");
    }
}
const dog=new Dog();
dog.bark();
console.log();
const newDog=new Dog();
const snake=new Snake();
snake.bite();
