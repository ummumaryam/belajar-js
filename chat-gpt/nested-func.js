function outerFunction(x) {
    function innerFunction(y) {
        return x + y;
    }
    return innerFunction;
}

var inner = outerFunction(5);
var sum = inner(15);
console.log(sum);
