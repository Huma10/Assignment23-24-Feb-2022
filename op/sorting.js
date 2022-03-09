var carName = new Array();
//Adding elements
carName.push("audi");
carName.push("maruti");
carName.push("b");
carName.push("aoyotadddd");
//Sort an array based on Length of each String in array in ascending and descending order
//sorting in ascending
var arr = carName.sort(function (a, b) {
    return a.length - b.length;
});
console.log(arr);
// sorting in descending
var arr1 = carName.sort(function (a, b) {
    return b.length - a.length;
});
console.log(arr1);
//Based on alphabetical operator
//in ascending
console.log(carName.sort());
// in descending
console.log(carName.reverse());
