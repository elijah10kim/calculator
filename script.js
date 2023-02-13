function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    let product = x * y;
    if (product == -0) {
        product = 0;
    }
    return product;
}

function divide(x,y) {
    if (x == -0) {
        x = 0;
    }
    let quotient = x / y;
    if (quotient == -0) {
        return 0;
    }
    return quotient;
}

function operate(op, x, y) {
    return op(x,y);
}