//create an array
let bookName:Array<string> = new Array<string>();

// Add elements to it
bookName.push("ABC");
bookName.push("PQR");
bookName.push("XYZ");
bookName.push("ABCD");

//Using forEach()
console.log("Using for each()");

bookName.forEach(function(n:string,i:number){
    console.log(`Book name is ${n} and position is ${i}`);    
});
//Example:: of forEach Loop
console.log("Example of forEach()");
let n = [2,4,8,9];
n.forEach(function(num:number){
    if(num % 2===0){
        console.log(`Even numbers are ${num}`);        
    }
});

//---------------------------Using map-----------------------------------------------------
console.log("Using map()");
bookName.map(function(n:string,i:number){
    console.log(`Book name is ${n} and position is ${i}`); 
});
//Example of Map
console.log("Example using Map");
let incremented = n.map(function(num:number){
   num = num + 1;     
   return num; 
});
console.log(`Arrays after incrementing uisng MAP is ${incremented}`);


//------------------------------Using Filter-------------------------------------------------
console.log("Using filter");
let result = bookName.filter(function(n:string){
    return n.includes("A");
});
console.log(result);


