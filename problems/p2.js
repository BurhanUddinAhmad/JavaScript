/*
২. [ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে।
১ টি সিঙ্গারা এর দাম - ৭ টাকা
১ টি সমুচা এর দাম - ১০ টাকা
১ টি জিলাপি এর দাম - ১৫ টাকা
এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।
*/
function pandaCost(singara, samucha, jilapi) {
    if(typeof singara !== "number" || typeof samucha !== "number" || typeof jilapi !== "number") {
        return "Please enter valid integer number!";
    } else if(singara < 0 || samucha < 0 || jilapi < 0) {
        return "All parameters should be positive number!";
    } else {
        const singaraPrice = 7;
        const samuchaPrice = 10;
        const jilapiPrice = 15;

        const total = (singara * singaraPrice) + (samucha * samuchaPrice) + (jilapi * jilapiPrice);

        return total;
    }
}
// console.log(pandaCost(1, 3, 4));
// console.log(pandaCost(1, 3));
console.log(pandaCost(1, 3, -4));