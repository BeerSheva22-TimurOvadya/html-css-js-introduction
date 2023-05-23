//what's wrong
// function sleep(timeout) {
//     let flRunning = true;
//     setTimeout(() => (flRunning = false), timeout);
//     while (flRunning);
// }
// sleep(1000);
// don't works (freezes)

// function sleep(timeout, ...functions) {
//     function sleepFn() {
//         functions.forEach((f) => f());
//     }
//     setTimeout(sleepFn, timeout);
// }

// sleep(2000, f1, f2, f3);

function sleep(timeout) {
    return new Promise((resolve) => setTimeout(() => resolve(), timeout));
}

// const promise = sleep(2000);
// promise
//     .then(() => f1())
//     .then(() => f2())
//     .then(() => f3());

function f1() {
    console.log('f1 performed');
}
function f2() {
    console.log('f2 performed');
}
function f3() {
    console.log('f3 performed');
}

function getId(predicate) {
    const ids = [123, 124, 125, 126];
    const index = ids.findIndex(predicate);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return index < 0 ? reject('id not foud') : resolve(ids[index]);
        }, 1000);
    });
}

function getCar(id) {
    const cars = {
        123: 'suzuki',
        124: 'hundai',
        125: 'honda',
    };
    const car = cars[id];
    return new Promise((resolve, reject) =>
        setTimeout(() => (car ? resolve(car) : reject('no car found'), 1000)),
    );
}

// function displayCar(predicate) {
//     return getId(predicate)
//         .then((id) => getCar(id))
//         .then((car) => console.log(car))
//         .catch((error) => {
//             console.log(error);
//             // return 'mersedes';
//         });
//     // .finally(() => console.log('finally'))
// }

async function displayCar(predicate) {
    // await sleep(20000)
    try {
        const id = await getId(predicate);
        const car = await getCar(id);
        console.log(car);
    } catch (error) {
        console.log(error);
    }
}

displayCar((id) => id == 126).then(() => console.log('thanks & good bye'));
// then(() => console.log('wait for the data ...'));
console.log('waiting for the data ...');
