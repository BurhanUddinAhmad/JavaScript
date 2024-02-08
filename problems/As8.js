/*
// Problem - 1
function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Please enter a number..";
    }
    const result = Math.pow(number, 3);
    return result;

}
console.log(cubeNumber('num'));

// Problem - 2
function matchFinder(str1, str2) {
    if(typeof str1 !== 'string' || typeof str2 !== 'string') {
        return "Please make sure you have entered a string";
    }
    const result = str1.includes(str2);
    return result;
}
console.log(matchFinder("Hello world", 'hello'));

// Problem - 3
function sortMaker(arr) {
    const arr = [a,b];
    if(a < 0 || b < 0) {
        return "Invalid Input";
    }
    if(a == b) {
        return "equal";
    }
    if(a > b) {
        return [a, b];
    } else {
        return [b, a];
    }
}
console.log(sortMaker(0, 2));


// Problem - 4
function findAddress(obj) {
    const street = obj.street || "_";
    const house = obj.house || "_";
    const society = obj.society || "_";
    const str = street + "," + house + "," + society;
    return str;
}
// console.log(findAddress({street:10, society: "Earth Perfect"}));

// Problem - 5
function canPay(changeArray, totalDue){
    if (changeArray.length == 0) {
        return "Your array is empty";
    }
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        const element = changeArray[i];
        sum += element;
    }
    if (sum >= totalDue) {
        return true;
    } else {
        return false;
    }
}
// console.log(canPay([1,5,5], 10));
*/