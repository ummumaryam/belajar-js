function createAdder(value) {
    const owner = "Eko";

    function add(param) {
        // console.log(owner);
        return value * param;
    }

    return add;
}

const addTwo = createAdder(2);
// function addTwo(param){
//     console.log("Eko");
//     return 2 + param;
// }
console.log(addTwo(10));
console.log(addTwo(20));

const addTen = createAdder(10);
// function addTwo(param){
//     console.log("Eko");
//     return 10 + param;
// }
console.log(addTen(10));
console.log(addTen(20));
