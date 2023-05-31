import { count } from '../util/number-functions.js';
import { getRandomInt } from '../util/random.js';
const minId = 100000;
const maxId = 1000000;
//TODO by using setTimeout update the CompanyService code that 
// each public method returns Promise that after some timeout moves in the (resolved) 
// fulfilled state

export default class CompanyService {
    #employees;
   
    constructor() {
        this.#employees = {};
    }

    addEmployee(employee) {
        return new Promise(resolve => {
            setTimeout(() => {
                const id = this.#getId();
                this.#employees[id] = { ...employee, id };
                resolve(this.#employees[id]);
            }, 2000);
        });
    }

    #getId() {
        let id;
        do {
            id = getRandomInt(minId, maxId);
        } while (this.#employees[id]);
        return id;
    }

    getStatistics(field, interval) {
        return new Promise(resolve => {
            setTimeout(() => {
                let array = Object.values(this.#employees);
                const currentYear = new Date().getFullYear();
                if (field == 'birthYear') {
                    array = array.map((e) => ({ age: currentYear - e.birthYear }));
                    field = 'age';
                }
                const statisticsObj = count(array, field, interval);
                resolve(Object.entries(statisticsObj).map((e) => {
                    const min = e[0] * interval;
                    const max = min + interval - 1;
                    return { min, max, count: e[1]};
                }));
            }, 4000);
        });
    }

    getAllEmployees() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(Object.values(this.#employees));
            }, 4000);
        });
    }
}
