class Student {
    study() {
        console.log("reads electronics");
    }
}
class ec extends Student {
    study() {
        console.log("reads everything");
    }
}
let f = new ec();
f.study();
//# sourceMappingURL=overriding.js.map