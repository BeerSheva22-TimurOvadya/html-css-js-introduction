console.log("Hello World!");
//
// let a = 5; //number
// a = "hello"; //string
// a = false; //boolean
// let a = 5 + "5";
// console.log(a, typeof a);
// a = a - 5;
// console.log(a, typeof a);
// a = "abc";
// a /= 2;
// console.log(a, typeof a);
// a = "123";
// // a-=0;
// a = + a;
// console.log(a, typeof a);

// if (a = 0) {
//     console.log("a is true");
// }
// console.log(a, typeof a);

// let a = 1;
// let b = 3;
// let c = "1";
// if(a < b <= c ){
//     console.log("a < b < c  is true");
// }

// if(2 < "adc"){
//     console.log(' 2 < "adc"  is true ');
// }

// if(2 > "adc"){
//     console.log(' 2 > "adc"  is true ');
// }

// if(2 == "adc"){
//     console.log(' 2 = "adc"  is true ');
// }

// let a  = "abc";
// a = !!a;
// console.log(a, typeof a);

// console.log (2 + 10 * true / false);

// console.log (2 + 10 * false / true);

// const a = 3 - (4 + "1");
// const b = 3 + (4 + "1");
// const c = 3 + 4 + "1";
// const d = 3 - 4 + "1";
// console.log(a, typeof a );
// console.log(b, typeof b );
// console.log(c, typeof c );
// console.log(d, typeof d );


// let a = new Number(3);
// console.log(a = a + 5, typeof a );
// let a = 0.3456789;
// console.log(a, typeof a);
// a = a.toFixed(2);
// console.log(a + 5, typeof a);
// a = + a;
// console.log(a + 5, typeof a);
// a = !!new Number(0);
// console.log(a, typeof a);
// a = !!0;
// console.log(a, typeof a);

// Math.trunc, Math.round, 
// let a = "256 * 320";
// console.log(+a);
// console.log(parseInt(a));
// a = "257.45a";
// console.log(+a, parseInt(a), parseFloat(a)); (Нот э намбер, 257, 257.45)

// console.log(String.length("abc")); (не рабоатет так)
// console.log("abc".length);

// console.log('A'.charCodeAt(0));
// console.log(String.fromCharCode(65));
// console.log(String.fromCodePoint(65, 66, 67));

// console.log(Number.length);
// console.log(String.length);

// console.log((123).toString(16));

// Use symbols "A", "S";
//print ananas

// console.log(("A" + +"A" + "AS").toLowerCase());



// function myToStringInt(number, radix){
//     // number - any number
//     //radix - computation base if radix < 2 or radix > 36 then radix = 10
//     //removes fractor part, 34.25 => 34; 34.75 => 35
//     //toSTring method is diallowed
//      //return string as a view presentation of the integer part of a given number in accordance with the given radix
// }


function myToStringInt(number, radix) {
    if (radix < 2 || radix > 36) {
        radix = 10;
    }

    number = Math.round(number);
    const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
    
    let result = "";
    let isNegative = false;

    if (number == 0) {
        return "0";
    }

    if (number < 0) {
        isNegative = true;
        number = Math.abs(number);
    }

    while (number > 0) {
        const remainder = number % radix;
        number = Math.floor(number / radix);
        result = digits[remainder] + result;
    }

    if (isNegative) {
        result = "-" + result;
    }

    return result;
}


console.log(myToStringInt(5, 2));
console.log((5).toString(2));

console.log(myToStringInt(123456789, 36));
console.log((123456789).toString(36));

console.log(myToStringInt(-55484, 23));
console.log((-55484).toString(23));




errors = 0;
for (radix = 2; radix < 37; radix ++) {
    for (i = -99999; i < 99999; i++) {
        if (myToStringInt(i, radix) != i.toString(radix)) {
            errors++;
        }
    }
}

if(errors == 0){
    console.log("Congratulations! The test will pass successfully!");
} else {
    console.log("The test is not passed, the number of errors: " + errors + ". Try again.");
}
