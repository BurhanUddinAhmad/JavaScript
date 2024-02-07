
/* 
৩. [ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা। 

যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০ টাকা করে। 

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেকের জন্য 8000 টাকা করে দিতে হবে। 

আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তা প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এবং ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০ টাকা করে দিতে হবে৷ 

এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে ভূমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে।
*/
function picnicBudget(participants) {
    if(typeof participants !== "number" && participants < 0) {
        return "Participants should be positive number";
    } else {
        let first100Cost = 0;
        let second101To200Cost = 0;
        let remainingCost = 0;
        let total = 0;

        if(participants <= 100) {
            first100Cost = participants * 5000;
            return first100Cost;
        } else if (participants <= 200) {
            first100Cost = 5000 * 100;
            second101To200Cost = (participants - 100) * 4000;
            total = first100Cost + second101To200Cost;
            return total;
        } else {
            first100Cost = 5000 * 100;
            second101To200Cost = 4000 * 100;
            remainingCost = (participants -200) * 300;
            total = first100Cost + second101To200Cost + remainingCost;
            return total;
        }
    }
}
console.log(picnicBudget(102));