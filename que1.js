function generateArray(a, b) {
    let arr = new Array();
    for (let x = a; x <= b; x++){
        arr.push(x);
    }
    return arr;
}

let arr = generateArray(3, 8);
console.log(arr);