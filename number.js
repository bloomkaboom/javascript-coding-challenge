addDigits = n => {
    let sum = n
    .toString()
    .split('')
    .map(Number)
    .reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum;
};

acceptInput = input => {
    let temp = addDigits(input);
    while( temp.toString().length >= 1) {
        let newTemp = addDigits(temp);
        console.log(newTemp);
        break;
    }
}

acceptInput(23478998);
