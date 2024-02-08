function calculateMoney(ticketSale) {
    if(ticketSale <= 0) {
        return "Invalid number! Please enter a valid positive number."
    }
    const sellingTicket = ticketSale * 120;
    const perDayExpense = 500 + (8 * 50);

    const dailyIncome = sellingTicket - perDayExpense;
    return dailyIncome;
}


function checkName(name) {
    if(typeof name !== "string"){
        return "Invalid! Give a string value";
    }
    if(name.length == 0) {
        return -1;
    } 
    else {
        const nam = name[name.length-1];
        if(nam === "a" 
        || nam === "e" 
        || nam === "i" 
        || nam === "o" 
        || nam === "u"
        || nam === "y"
        || nam === "w"
        || nam === "A"
        || nam === "E" 
        || nam === "I" 
        || nam === "O" 
        || nam === "U"
        || nam === "Y"
        || nam === "W"
        ) {
            return "Good Name";
        } else {
            return "Bad Name";
        }
    }
}


function deleteInvalids(array) {
    if(Array.isArray(array) === false) {
        return "Invalid array";
    }
    const numbersOnly = array.filter(index => typeof index === "number");
    return numbersOnly;
}


function password(obj) {
    if(!obj.name || !obj.birthYear || !obj.siteName) {
        return "Invalid! Please enter property value correctly";
    } else if(obj.birthYear.toString().length !== 4) {
        return "Invalid! birthYear must be 4 digits";
    } else {
        const firstLetter = obj.siteName.charAt(0).toUpperCase();
        const pass = firstLetter + obj.siteName.slice(1) + "#" + obj.name + "@" + obj.birthYear;
        return pass;
    }
}


function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr) !== true || typeof livingCost !== "number"){
        return "Invalid input"
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 3000) {
        const earning = arr[i] * .8;
        sum += earning;
        }else {
            const earning = arr[i];
            sum += earning;
        }
    }
    if (sum >= livingCost) {
        const saveings = sum - livingCost;
        return saveings;
    } else {
        return "Earn more";
    }
}
