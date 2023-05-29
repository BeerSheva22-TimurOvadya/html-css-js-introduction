export function getRandomInt(min, max) {
    if(min == max) {
        max++;
    } else if (min > max) {
        [min, max] = [max, min]
    }
    return Math.trunc(min + Math.random() * (max - min))

}
export function getRandomElement(array) {
    return array[getRandomInt(0, array.length)]
}
export function getRandomEmployee() {
    const maleNames = ['Vasya', 'Petya', 'Ivan'];
    const femaleNames = ['Masha', 'Olga'];
    const genders = ['male', 'female'];
    const departments = ['QA', 'Development', 'Audit', 'Accounting', 'Management'];
    const gender = getRandomElement(genders);
    const name = gender == 'male' ? getRandomElement(maleNames) : getRandomElement(femaleNames);
    
    return {
        id: getRandomInt(100000, 1000000),
        name: name,
        birthYear: getRandomInt(1950, 2003), 
        gender: gender,
        salary: getRandomInt(8000, 30000),
        department: getRandomElement(departments)
    }
}