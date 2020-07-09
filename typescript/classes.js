let Dog = /** @class */ (() => {
    class Dog {
        bark() {
            console.log("dog is barking");
        }
    }
    //accessable to every Dog object
    //similar to every object created by Dog
    Dog.a = "soumik";
    return Dog;
})();
class Snake {
    bite() {
        console.log("Snake is biting");
    }
}
const dog = new Dog();
dog.bark();
console.log();
const newDog = new Dog();
const snake = new Snake();
snake.bite();
//# sourceMappingURL=classes.js.map