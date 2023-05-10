// console.log("Hello World!");
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


// function myToStringInt(number, radix) {
//     if (radix < 2 || radix > 36) {
//         radix = 10;
//     }

//     number = Math.round(number);
//     const digits = "0123456789abcdefghijklmnopqrstuvwxyz";

//     let result = "";
//     let isNegative = false;

//     if (number == 0) {
//         return "0";
//     }

//     if (number < 0) {
//         isNegative = true;
//         number = Math.abs(number);
//     }

//     while (number > 0) {
//         const remainder = number % radix;
//         number = Math.floor(number / radix);
//         result = digits[remainder] + result;
//     }

//     if (isNegative) {
//         result = "-" + result;
//     }

//     return result;
// }

// Решение в классе:

// function myToStringInt(number, radix) {    
//     const sign = number < 0 ? '-' : '';
//     number = Math.abs(number); //negative to positive
//     number = Math.round(number); //rounding to close integer number
//     if (radix < 2 || radix > 36) {
//         radix = 10;
//     }
//     let res = '';
//     do {
//         res = getSymbol(number, radix) + res;
//         number = Math.trunc(number / radix);
//     }while (number != 0);
//     return sign + res;
// }
// function getSymbol(number, radix) {
//     const aCode = 'a'.charCodeAt(0);
//     const delta = aCode - 10;
//     const remainder = number % radix ;
//     return remainder < 10 ? remainder + '' : String.fromCharCode(remainder + delta);
// }

// console.log(myToStringInt(3.78, 24));
// console.log((3.78).toString(24));

// console.log(myToStringInt(0, 18));
// console.log((0).toString(18));

// console.log(myToStringInt(5, 2));
// console.log((5).toString(2));

// console.log(myToStringInt(123456789, 36));
// console.log((123456789).toString(36));

// console.log(myToStringInt(-55484, 23));
// console.log((-55484).toString(23));

// console.log((123456789).toString(36));
// console.log(myToStringInt(123456789, 36));
// console.log(myToStringInt(-123456789, 36));
// console.log(myToStringInt(-123456789.5234, 36));
// console.log(myToStringInt(0, 36));



// errors = 0;
// for (radix = 2; radix < 37; radix ++) {
//     for (i = -99999; i < 99999; i++) {
//         if (myToStringInt(i, radix) != i.toString(radix)) {
//             errors++;
//         }
//     }
// }
// if(errors == 0){
//     console.log("Congratulations! The test will pass successfully!");
// } else {
//     console.log("The test is not passed, the number of errors: " + errors + ". Try again.");
// }



// "string" or 'string' with no string interpolation 'a' - string
//  `....${<expression>}......`


function myParseInt(strNum, radix) {
    strNum = strNum.trim();
    let index = strNum.charAt(0) == '-' || strNum.charAt(0) == '+' ? 1 : 0;
    if((!radix || radix == 16) && getHexdecemalIndex(strNum.substring(index)) > 0){
        index += 2;  
        radix = 16;      
    }
    if(!radix ){
        radix = 10;
    }

    let res = radix > 1 && radix < 37 ? getDigitCode(strNum, index, radix) : NaN;    
    if (!isNaN(res)) {
        let digit;
        index++;
        while (index < strNum.length &&
            !isNaN(digit = getDigitCode(strNum, index, radix))) {
            res = res * radix + digit;
            index++;
        }
        if (strNum[0] == '-') {
            res = -res
        }
    }
    return res;
}

function getHexdecemalIndex(str){    
    return str.toLowerCase().startsWith('0x') ? 2 : 0;

}

function getDigitCode(strNum, index, radix) {
    const delta = 'a'.charCodeAt(0) - 10;
    const symbol = strNum.charAt(index).toLowerCase();
    const code = symbol >= '0' && symbol <= '9' ? +symbol : symbol.charCodeAt(0) - delta;
    return code >= 0 && code < radix ? code : NaN;
}

function testMyParseInt() {
    const testCases = [
      ['42', 10],
      ['-42', 10],
      ['101010', 2],
      ['1a', 16],
      ['java', 2],
      ['  42', 10],
      ['42 with text', 10],
      ['text 42', 10],
      ['10', 8],
      ['7', 9],
      ['42', 37],
      ['-', 10],
      ['', 10],
      ['0x1a', 16],
      ['0X1A', 16],
      ['1a', 10],
      ['0x1a'],
      ['42'],
      ['-1042'],
      ['0x1a', 2]
    ];
  
    for (const [strNum, radix] of testCases) {
      const expected = parseInt(strNum, radix);
      const actual = myParseInt(strNum, radix);
      const result = (isNaN(expected) && isNaN(actual)) || (expected == actual) ? 'PASS' : 'FAIL';
  
      console.log(`myParseInt('${strNum}', ${radix}): expected ${expected}, got ${actual} -> ${result}`);
    }
  }
  
  testMyParseInt();


// const strNum = '42';
// const radix = 10;
// console.log(`string with number ${strNum} for ${radix} is ${parseInt(strNum, radix)}`);
// console.log(`(myParseInt) string with number ${strNum} for ${radix} is ${myParseInt(strNum, radix)}`);

// const strNum1 = '-rewrrwe';
// const radix1 = 18;
// console.log(`string with number ${strNum1} for ${radix1} is ${parseInt(strNum1, radix1)}`);
// console.log(`(myParseInt) string with number ${strNum1} for ${radix1} is ${myParseInt(strNum1, radix1)}`);

// const strNum2 = '0';
// const radix2 = 10;
// console.log(`string with number ${strNum2} for ${radix2} is ${parseInt(strNum2, radix2)}`);
// console.log(`(myParseInt) string with number ${strNum2} for ${radix2} is ${myParseInt(strNum2, radix2)}`);

// let b;
// console.log(b + 10);
// console.log(b, typeof b);
// console.log(function () {return function () {return 10}} () () ()) ;

// console.log(eval("Math.sqrt(4) * (100 - 10)"));

// console.log(eval("let d = function() {return function(){return 10}}; Math.sqrt(4) * (100 - d()())"));


// console.log(`3 == "3" is ${3 == "3"}`);
// console.log(`3 === "3" is ${3 === "3"}`);

function sum (op1, op2 = 20) {
    return op1 + op2
}
let a1 = 8;
let a2;
console.log(`a1 = ${a1}, a2 = ${a2} sum(a1, a2) is ${sum(a1, a2)}`)
