//Validation
function detail(info) {
 if(typeof info !== "object") {
    return "Please enter object";
 } else if(!info.name || !info.age) {
    return "Please enter property value!";
 } else if (typeof info.name !== "string" || typeof info.age !== "number") {
    return "Name should be string and age should be number.";
 } else if(info.age <= 0) {
    return "age should be a positive number";
 } else{
    return `My name is: ${info.name}. I am ${info.age} years old.`;
 }
}
console.log(detail({name: "Shuvo", age: 2}));