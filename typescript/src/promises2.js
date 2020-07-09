/*Promises-> resolve
or Promise-> Promise
or promises->pending*/
//used as a substitute of callback
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("your promises has been resolved");
                resolve();
            }
            else {
                console.log("Sorry");
                reject("not fullfilled!");
            }
        }, 2000);
    });
}
func1().then(function () {
    console.log("thanks for resolving");
}).catch(function (error) {
    console.log("very bad bro" + "reason" + error);
});
//# sourceMappingURL=promises2.js.map