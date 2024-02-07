/*
১. [ফাংশন নেম দিতে হবে anaTovori]; একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (Ana)। তারপর সেটাকে ভরি তে কনভার্ট করে কত মান হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে।
*/
function anaToVori(Ana) {
    if (typeof Ana !== "number" || Ana < 0) {
        return "Please give a valid integer number!";
    } else {
        const vori = Ana * 0.0625;
        return vori;
    }
}
console.log(anaToVori(33));