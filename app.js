// const ar = [];
// ar[10] = 100;
// ar[0] = 'hello';
// ar[3] = [];
// ar.length = 0;
// ar[0] = 1;
// const ar2 = [[1, 6], [2, 0, 0], [3, 1]];
// []&&console.log(true);
// add at array end
// ar[ar.length] = 10;
// let s = ar.push(...ar2);
// ar[10];

//method "map"
// console.log([1, 2, 3].map(n => n ** 2));

// function getRandomIntNumber(min, max, MinInclusive = true, MaxInclusive = false) {
//     if (!MinInclusive) {
//         min++;
//     }
//     if (MaxInclusive) {
//         max++;
//     }
//     return min < max ? Math.trunc(Math.random() * (max - min) + min) : NaN;
// }

// console.log(getRandomIntNumber(8, 99)); 
// console.log(getRandomIntNumber(1, 1, false, true)); 


// function getArrayRandomIntNumbers(nNumbers, min, max, MinInclusive = true, MaxInclusive = false) {
//     let res = [];
//     res.length = nNumbers;
//     res = [...res];
//     return res.map(() => getRandomIntNumber(min, max, MinInclusive, MaxInclusive));
// }

// console.log(getArrayRandomIntNumbers(5, -5, 14))
// console.log(getArrayRandomIntNumbers(8, 1000, 5000, false, true ));
// console.log(getArrayRandomIntNumbers(10, 8, 1))

// let ar1 = [];
// ar1.push(1,2,3);
// ar1.length = 100;
// ar1 = [...ar1];

// ar1.length = 5;
// console.log(ar1);

// console.log([1, 2, 3].join(''));

// function getOrderedList(array) {
//     let html = '';
//     if (Array.isArray(array)) {
//         const listItems = array.map(item => `<li>${item}</li>`).join('');
//         html = `<ol>${listItems}</ol>`;
//     }
//     return html;
// }

// function getOrderedList(array) {
//     return `<ol>${getListItems(array)}</ol>`;
// }
// function getListItems(array) {
//     return array.map(item => `<li class="square ${colorDetermination(item)}"></li>`).join('');
// }

// function colorDetermination (item){   
//     return item == 0 ? 'white' : 'black';
// }


// const inputArray = [1, 2, 3];
// const output = getOrderedList(inputArray);
// console.log(output);

// const inputArray1 = getArrayRandomIntNumbers(10, -100, 100);
// const output1 = getOrderedList(inputArray1);
// console.log(output1);

// const inputArray2 = ["hello", "all", "world"];
// const output2 = getOrderedList(inputArray2);
// console.log(output2);

// const inputArray3 = 123;
// const output3 = getOrderedList(inputArray3);
// console.log(output3);

// function getOrderedList(array) {    
//     return `<ol style="text-align:center; list-style:none">${getListItems(array)}</ol>`
// }

// function getListItems(array) {
//     return array.map(v => `<li style="width: 30px; height:30px; border: solid; solid 1px gray;
//     background-color: ${v ? 'black' : 'white'}"></li>`).join('');
// }


// bodyId.innerHTML = getOrderedList(getArrayRandomIntNumbers(10, 0, 2));

// function getMatrixRandomIntNumbers(rows, columns, min, max){
//     let matrix = [];
//     matrix.length = rows;
//     matrix = [...matrix];
//     return matrix.map(() => getArrayRandomIntNumbers(columns, min, max, true, true));
// }

// console.log(getMatrixRandomIntNumbers(6,6,0,1));


// function getChessBoard(rows, columns, isBlackFirst) {
//     let matrix = getMatrixRandomIntNumbers(rows, columns, 0, 1);
//     let res = matrix.map(v => {
//         let res = `<ol class="row"> ${getChessRow(v, isBlackFirst)} </ol>`;
//         isBlackFirst = !isBlackFirst;
//         return res;
//     });
//     return <ol> ${res.join('')} </ol>;
// }

// function getChessRow(array, isBlackFirst){
//     let res = array.map(v => {
//         let res = `<li style ="background-color: ${isBlackFirst ? 'black' : 'white'}"</li`;
//         isBlackFirst = !isBlackFirst;
//         return res;
//     })
//     return res.join('');
// }

// bodyId.innerHTML = getChessBoard(8, 8, false);

// function arraycopy(src, posSrc, dst, posDst, length) {
//     let elementsToCopy = src.slice(posSrc, posSrc + length);
//     dst.splice(posDst, length, ...elementsToCopy);
// }

// let src = [1, 2, 3, 4, 5];
// let dst = [6, 7, 8, 9, 10];
// arraycopy(src, 1, dst, 2, 2);
// console.log(dst);




// function moveElement(array, position, shift) {
//     let newPosition = position + shift;

//     if (newPosition < 0) {
//         newPosition = 0;
//     } else if (newPosition > array.length - 1) {
//         newPosition = array.length - 1;
//     }

//     let elementArray = array.slice(position, position + 1);
//     array.splice(position, 1);
//     array.splice(newPosition, 0, elementArray[0]);

//     return array;
// }

// console.log(moveElement([1, 2, 3, 4, 5], 2, 1)); // [ 1, 2, 4, 3, 5 ]

// console.log(moveElement([1, 2, 3, 4, 5], 2, -1)); // [ 1, 3, 2, 4, 5 ]

// console.log(moveElement([1, 2, 3, 4, 5], 0, -1)); // [ 1, 2, 3, 4, 5 ]

// console.log(moveElement([1, 2, 3, 4, 5], 2, 20)); // [ 1, 2, 4, 5, 3 ]

// console.log(moveElement([1, 2, 3, 4, 5], 2, -20)); // [ 3, 1, 2, 4, 5 ]


// const arI = [1, 2, 3];
// let index = arS.indexOf(6);
// console.log(index);

//reduce

// console.log([1, 2, 3].reduce((res, cur) => res + cur, 10));
// console.log(1, 2, 3)
// console.log([1, 2, 3].reduce((res, cur) => Math.min(res, cur)));
// console.log([1, 2, 3].reduce((res, cur) => cur < res ? cur : res));
// console.log([1, 2, 3].reduce((res, cur) => {
//     if (cur < res) {
//         return cur;
//     } else {
//         return res;
//     }
// }));


// console.log([1, 2, 3].reduce((res, cur) => cur < res ? cur : res));

// const arS = [10, 20, -70, 100, 6, -10, 0];

// let minMax = arS.reduce((acc, val) => {
//     if (val < acc[0]) acc[0] = val;
//     if (val > acc[1]) acc[1] = val;
//     return acc;
// }, [Infinity, -Infinity]);

// console.log(minMax);


const ar10 = [2, 3, 123, 200, 99, -5, 'abc'];
// ar10.length = 0;
// console.log(ar10)
console.log (ar10.sort((a, b) => a - b));
