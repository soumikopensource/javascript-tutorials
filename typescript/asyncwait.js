//alternative to async await
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function bringBread() {
    //tasks
}
function final() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const myData = yield bringBread();
            return myData;
        }
        catch (e) {
            return Promise.reject(e);
        }
    });
}
final().then(function () {
    console.log(final());
}).catch(err => {
    console.log(err);
});
//# sourceMappingURL=asyncwait.js.map