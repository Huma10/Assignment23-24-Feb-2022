let carName:Array<string> = new Array<string>();
//Adding elements
carName.push("audi");
carName.push("maruti");
carName.push("b");
carName.push("aoyotadddd");

//Sort an array based on Length of each String in array in ascending and descending order

//sorting in ascending
console.log("Sorting on the basis of length");

let arr = carName.sort((a,b)=>{
    return a.length - b.length;
});
console.log(arr);


// sorting in descending
let arr1 = carName.sort((a,b)=>{
    return b.length - a.length;
});
console.log(arr1);

console.log("sorting on the basis of alphabets");

//Based on alphabetical operator
//in ascending
console.log(carName.sort());

// in descending
console.log(carName.reverse());

