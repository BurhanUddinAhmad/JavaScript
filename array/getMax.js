/*
function getMax(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
const max1 = getMax(85, 79);
const max2 = getMax(64, 98);
const max = getMax(max1, max2);
// console.log("Max of two is: ", max);

const jim = 98;
const tim = 89;
const kim = 78;
if (jim > tim && jim > kim) {
    console.log('Jim is the ultimate boss');
} else if (tim > jim && tim > kim) {
    console.log("Tim is the boss");
} else {
    console.log("kim is the kardashians boss");
}
*/
// Validation
const numbers = [3, 23, 44, 35, '54', 25, 88];
function getMax(num) {
    if(!Array.isArray(num)) {
        return "Give an array";
    } else {
        let max = num[0];
        for( let i = 1; i < num.length; i++) {
            if(typeof num[i] !== "number") {
                return "All values should be number";
            } else {
                if(max < num[i]) {
                    max = num[i];
                }
            }
        }
        return max;
    }
    
}
const maxNum = getMax(numbers);
// console.log(maxNum);

function maxNumber(mx) {
    let x = mx[0];
    for(const numb of mx) {
        if(numb > x) {
            x = numb;
        }
    }
    return x;
}
const maxnumb = maxNumber(numbers);
// console.log(maxnumb);
const max = Math.max(12, 3, 44, 55, 98);
// console.log("Max i using Math.max", max);