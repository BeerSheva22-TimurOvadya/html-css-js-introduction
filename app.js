const ar = [];
ar[10] = 100;
ar[0] = 'hello';
ar[3] = [];
ar.length = 0;
ar[0] = 1;
const ar2 = [[1, 6], [2, 0, 0], [3, 1]];
// []&&console.log(true);
// add at array end
ar[ar.length] = 10;
let s = ar.push(...ar2);
ar[10];

//method "map"
// console.log([1, 2, 3].map(n => n ** 2));

function getRandomIntNumber(min, max, MinInclusive = true, MaxInclusive = false) {
    if (min > max) {
        return undefined;
    } 
       
    if (!MinInclusive) {
        min += 1;
    }

    if (MaxInclusive) {
        max += 1;
    }
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomIntNumber(8, 99)); 
console.log(getRandomIntNumber(1, 1, false, true)); 


function getArrayRandomIntNumbers(nNumbers, min, max, MinInclusive = true, MaxInclusive = false) { 
    let ar = [];
    ar.length = nNumbers;      
    return [...ar].map(() => getRandomIntNumber(min, max, MinInclusive, MaxInclusive));  
}

console.log(getArrayRandomIntNumbers(5, -5, 14))
console.log(getArrayRandomIntNumbers(8, 1000, 5000, false, true ));
console.log(getArrayRandomIntNumbers(10, 8, 1))