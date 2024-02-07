// validation
function add(x, y) {
    if(typeof x !== "number" || typeof y !== "number") {
        return "Please enter integer value!";
    }
    return x + y;
}
console.log(add(4, '4'));