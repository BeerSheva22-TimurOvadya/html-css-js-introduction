// const person = {
//     name: "Vasya",
//     id: 123,
//     birthYear: 1990,
//     address: { country: "Israel", city: "Rehovot" },
// };

// function createPerson(id, name, birthYear, country, city) {
//     return { id: id, name: name, birthYear: birthYear, address: { country: country, city: city } };
// }

// function createPerson(id, name, birthYear, country, city) {
//     return { id, name, birthYear, address: { country, city } };
// }
// const person1 = createPerson(123, 'Vasya', 1999, 'Israel', 'Rehovot');
// const person2 = createPerson(123, 'Vasya', 1999, 'Israel', 'Rehovot');
// console.log(`person1 == person2 is ${person1 == person2}`); //false
// console.log(person1.name); // Vasya
// console.log(person1.id); // 123
// console.log(person1[id]); // error
// console.log(person1["id"]);// 123

// function displayKeyValue(person, key1, key2) {
//     if (key2) {
//         console.log(`key1 ${key1}, key2 ${key2}, value is ${person[key1][key2]}`);
//     } else {
//         console.log(`key1 ${key1} is ${person[key1]}`);
//     }
// }
// displayKeyValue(person1, 'address', 'country');
// //Method 'keays' of Object returns array of key values
// console.log('keys', Object.keys(person1));
// //Method 'values' of Object returns array of  values
// console.log('values', Object.values(person1));
// //Method 'entries' of Object returns array of  arrays with key as first elemetn and value is the one
// console.log('entries', Object.entries(person1));

// const x = {};
// x['ab'] = 10;
// x['ab']++;
// console.log(x['ab']);

// моя ДЗ:
// function displayOccurrences(array) {
//     const occurrences = calculateOccurrences(array);
//     const sortedOccurrences = sortOccurrences(occurrences);

//     sortedOccurrences.forEach(([item, count]) => {
//         console.log(`${item} -> ${count}`);
//     });
// }

// function calculateOccurrences(array) {
//     return array.reduce((accumulator, currentItem) => {
//         accumulator[currentItem] = accumulator[currentItem] ? accumulator[currentItem] + 1 : 1;
//         return accumulator;
//     }, {});
// }

// function sortOccurrences(occurrences) {
//     return Object.entries(occurrences).sort((a, b) => {
//         const compare = a[0] > b[0] ? 1 : -1;
//         const countDifference = b[1] - a[1];
//         return countDifference == 0 ? compare : countDifference;
//     });
// }

// классная работа первый вариант:
// function displayOccurrences(array) {
//     const occurrences = array.reduce((obj, s) => {
//         obj[s] = obj[s] ? obj[s] + 1 : 1;
//         return obj;
//     }, {});
//     Object.entries(occurrences)
//         .sort((e1, e2) => (e1[1] == e2[1] ? e1[0].localeCompare(e2[0]) : e2[1] - e1[1]))
//         .forEach((e) => console.log(`${e[0]} -> ${e[1]}`));
// }

//Классная работа второй вариант (отличие синтаксиса)
// function displayOccurrences(array) {
//     const occurrences = array.reduce(
//         (obj, s) => ({
//             ...obj,
//             [s]: obj[s] ? obj[s] + 1 : 1,
//         }),
//         {},
//     );
//     Object.entries(occurrences)
//         .sort((e1, e2) => (e1[1] == e2[1] ? e1[0].localeCompare(e2[0]) : e2[1] - e1[1]))
//         .forEach((e) => console.log(`${e[0]} -> ${e[1]}`));
// }

// разделили на две функции предыдущее решение что бы использовать в анограмме
// function displayOccurrences(array) {
//     const occurrences = getOccurrence(array);
//     Object.entries(occurrences)
//         .sort((e1, e2) => (e1[1] == e2[1] ? e1[0].localeCompare(e2[0]) : e2[1] - e1[1]))
//         .forEach((e) => console.log(`${e[0]} -> ${e[1]}`));
// }

function getOccurrence(array) {
    return array.reduce(
        (obj, s) => ({
            ...obj,
            [s]: obj[s] ? obj[s] + 1 : 1,
        }),
        {},
    );
}

// displayOccurrences(['lmn', 'ab', 'lmn', 'c', 'd', 'ab', 'a', 'a', 'lmn']); // lmn -> 3, a -> 2, ab -> 2, c - > 1, d -> 1

// displayOccurrences(['apple', 'banana', 'apple', 'orange', 'banana', 'banana']) //banana -> 3, apple -> 2, orange -> 1

// displayOccurrences(['cat', 'dog', 'cat', 'cat', 'dog', 'horse', 'dog', 'dog']); // dog -> 4, cat -> 3, horse -> 1

// displayOccurrences(['a', 'b', 'c', 'a', 'b', 'b', 'c', 'c', 'c']); // c -> 4, b -> 3, a -> 2

// displayOccurrences(['apple']); //apple -> 1

// displayOccurrences(['apple', 'Apple', 'APPLE']); //APPLE -> 1, Apple -> 1, apple -> 1

// displayOccurrences(['1', '2', '10', '1', '2', '2', '10', '10', '10']); //10 -> 4, 2 -> 3, 1 -> 2
// displayOccurrences([]);

// const y = { xx: 0 };
// delete y.xx;
// console.log(y.xx);

// write this function
// function isAnagram(word, anagram){
//return true if is anagram
//return false if is not anagram
// }

// мое решение. немного не верное потому что использовал сортировку, причем дважды

// function isAnagram(word, anagram) {
//     let newWord = word.toLowerCase();
//     let newAnagram = anagram.toLowerCase();

//     if (newWord.length != newAnagram.length) {
//         return false;
//     }

//     newWord = [...newWord].sort().join('');
//     newAnagram = [...newAnagram].sort().join('');

//     if (newWord != newAnagram) {
//         return false;
//     }

//     return true;
// }

function isAnagram(word, anagram) {
    let res = false;
    if (word.length === anagram.length) {
        word = word.toLowerCase();
        anagram = anagram.toLowerCase();
        const occurrences = getOccurrence(Array.from(word));
        res = Array.from(anagram).every((s) => occurrences[s]-- > 0);
    }
    return res;
}

console.log(isAnagram('qwerty', 'RtyewQ')); //true
console.log(isAnagram('Anna', 'Nana')); //true
console.log(isAnagram('apple', 'aple')); //false
console.log(isAnagram('banana', 'ban na na')); //false
console.log(isAnagram('Anna', 'Anna')); //true
console.log(isAnagram('qwerty', 'asdfgh')); //false
