// Validation
const numbers = [3, 23, 44, 35, '54', 25, 88];
function getMin(num) {
    if(!Array.isArray(num)) {
        return "Give an array";
    } else {
        let min = num[0];
        for( let i = 1; i < num.length; i++) {
            if(typeof num[i] !== "number") {
                return "All values should be number";
            } else {
                if(min > num[i]) {
                    min = num[i];
                }
            }
        }
        return min;
    }
    
}
const minNum = getMin(numbers);
// console.log(minNum);

function minNumber(mn) {
    let x = mn[0];
    for(const numb of mn) {
        if(numb < x) {
            x = numb;
        }
    }
    return x;
}
const minnumb = minNumber(numbers);
// console.log(minnumb);
const min = Math.min(12, 3, 44, 55, 98);
// console.log("Min, I using Math.max", min);