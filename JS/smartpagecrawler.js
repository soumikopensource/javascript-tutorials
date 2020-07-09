let link11 = document.links;
let str21 = `python`;
console.log(link11);
let href21;
Array.from(link11).forEach(function (element) {

    href21 = element.href;
    if (href21.includes(str21)) {
        console.log(href21);
    }
});