//create an array
var bookName = new Array();
// Add elements to it
bookName.push("ABC");
bookName.push("PQR");
bookName.push("XYZ");
bookName.push("ABCD");
//Using forEach()
console.log("Using for each()");
bookName.forEach(function (n, i) {
    console.log("Book name is ".concat(n, " and position is ").concat(i));
});
//Example:: of forEach Loop
console.log("Example of forEach()");
var n = [2, 4, 8, 9];
n.forEach(function (num) {
    if (num % 2 === 0) {
        console.log("Even numbers are ".concat(num));
    }
});
//---------------------------Using map-----------------------------------------------------
console.log("Using map()");
bookName.map(function (n, i) {
    console.log("Book name is ".concat(n, " and position is ").concat(i));
});
//Example of Map
console.log("Example using Map");
var incremented = n.map(function (num) {
    num = num + 1;
    return num;
});
console.log("Arrays after incrementing uisng MAP is ".concat(incremented));
//------------------------------Using Filter-------------------------------------------------
console.log("Using filter");
var result = bookName.filter(function (n) {
    return n.includes("A");
});
console.log(result);
