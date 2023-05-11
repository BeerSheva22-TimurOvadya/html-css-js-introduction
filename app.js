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

function getRandomIntNumber(min, max, MinInclusive = true, MaxInclusive = false) {
    if (!MinInclusive) {
        min++;
    }
    if (MaxInclusive) {
        max++;
    }
    return min < max ? Math.trunc(Math.random() * (max - min) + min) : NaN;
}

// console.log(getRandomIntNumber(8, 99)); 
// console.log(getRandomIntNumber(1, 1, false, true)); 


function getArrayRandomIntNumbers(nNumbers, min, max, MinInclusive = true, MaxInclusive = false) {
    let res = [];
    res.length = nNumbers;
    res = [...res];
    return res.map(() => getRandomIntNumber(min, max, MinInclusive, MaxInclusive));
}

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

function getOrderedList(array) {    
    return `<ol style="text-align:center; list-style:none">${getListItems(array)}</ol>`
}

function getListItems(array) {
    return array.map(v => `<li style="width: 30px; height:30px; border: solid; solid 1px gray;
    background-color: ${v ? 'black' : 'white'}"></li>`).join('');
}


// bodyId.innerHTML = getOrderedList(getArrayRandomIntNumbers(10, 0, 2));

function getMatrixRandomIntNumbers(rows, columns, min, max, MinInclusive = true, MaxInclusive = true){
    let matrix = [];
    matrix.length = rows;
    matrix = [...matrix];
    return matrix.map(() => getArrayRandomIntNumbers(columns, min, max, MinInclusive, MaxInclusive));
}

console.log(getMatrixRandomIntNumbers(6,6,0,1));