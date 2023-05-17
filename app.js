//JS OOP/ ptototype

// write myForEach to call anyarray with the same behavier as the standard forach
// write myMap to call from any array
// write myFilter
// write myReduce

// реализуй метод ниже
// Array.prototype.myForEach = function () {
// }
// My custom forEach

Array.prototype.myForEach = function (el) {
    for (let i = 0; i < this.length; i++) {
        el(this[i], i, this);
    }
};

Array.prototype.myMap = function (el) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(el(this[i], i, this));
    }
    return res;
};

Array.prototype.myFilter = function (el) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (el(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
// реализуй myReduce
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue == undefined ? this[0] : initialValue;
    for (let i = initialValue == undefined ? 1 : 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

//Tests:
// let testArray = [1, 2, 3, 4, 5];
// let objectArray = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }];

// console.log('myForEach test:');
// objectArray.myForEach((value) => console.log(value));
// console.log('Standard forEach test:');
// objectArray.forEach((value) => console.log(value));

// console.log('myMap test:');
// console.log(testArray.myMap((value) => value * 2));
// console.log('Standard map test:');
// console.log(testArray.map((value) => value * 2));

// console.log('myFilter test:');
// console.log(objectArray.myFilter((value) => 'a' in value));
// console.log('Standard filter test:');
// console.log(objectArray.filter((value) => 'a' in value));

// console.log('myReduce test:');
// console.log(testArray.myReduce((acc, value) => acc + value, 0));
// console.log('Standard reduce test:');
// console.log(testArray.reduce((acc, value) => acc + value, 0));

// console.log('myReduce with objects test:');
// console.log(objectArray.myReduce((acc, value) => Object.assign(acc, value), {}));
// console.log('Standard reduce with objects test:');
// console.log(objectArray.reduce((acc, value) => Object.assign(acc, value), {}));



// class Deferred {
//     constructor() {
//         this.queue = [];
//         this.value = undefined;
//         this.resolved = false;
//     }

//     then(callback) {
//         if (this.resolved) {
//             this.value = callback(this.value);
//         } else {
//             this.queue.push(callback);
//         }
//         return this;
//     }

//     resolve(value) {
//         this.value = value;
//         this.resolved = true;
//         while (this.queue.length > 0) {
//             let callback = this.queue.shift();
//             this.value = callback(this.value);
//         }
//     }
// }


//второе решение
// class Deferred {
//     ar = [];
//     then(func) {
//         this.ar.push(func);
//     }
//     resolve(el) {
//         this.ar.forEach(func => el = func(el));
//     }
// }


// const d = new Deferred()
// d.then(function(res){ console.log("1 ", res); return "a"; });
// d.then(function(res){ console.log("2 ", res); return "b"; });
// d.then(function(res){ console.log("3 ", res); return "c"; });
// d.resolve('hello');
// 1  hello
// 2  a
// 3  b

