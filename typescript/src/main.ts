
//want to import the whole class
//import { Dog } from './animals/dog';

//import Snake,{Test}  from './animals/snake';
import {Snake,Dog} from './animals';

const dog=new Dog();
const snake=new Snake();
dog.bark();
snake.bite();