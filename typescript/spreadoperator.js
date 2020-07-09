let object1 = {
    name: "soumik",
    title: "Dey"
};
let object2 = {
    name: "soumik",
    title: "Kumar"
};
//spread operator
let object3 = Object.assign(Object.assign({}, object1), { testing: false, lastname: "Kumar" });
console.log(object3);
let arr10 = [1, 2, 3, 4];
let arr11 = [1, 4, 6, 9];
let arr13 = [...arr10, ...arr11, 11, 2];
console.log(arr13);
//# sourceMappingURL=spreadoperator.js.map