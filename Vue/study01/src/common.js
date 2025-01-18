const sliceText = (text) => {
    return text.length > 30 ? text.slice(0, 27) + "..." : text;
}

const moneyComma = (money) => {
    let moneyStr = money.toString();

    let newStr = "";
    let count = 0;
    for(let i=moneyStr.length-1; i >= 0; i--) {
        newStr = moneyStr[i] + newStr;
        count++;

        if (count % 3 === 0 && i !== 0) newStr = "," + newStr;
    }

    return newStr;
}

export {sliceText, moneyComma};