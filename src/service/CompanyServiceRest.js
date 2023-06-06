import { count } from '../util/number-functions.js';
const POLLING_INTERVAL = 5000;
export default class CompanyServiceRest {
    #baseUrl;
    #emloyeesCache;
    #dataUpdateFn;
    #intervalId;
    constructor(baseUrl, dataUpdateFn) {
        this.#baseUrl = baseUrl;
        this.#dataUpdateFn = dataUpdateFn;
        this.#intervalId = setInterval(this.#poller.bind(this), POLLING_INTERVAL);
    }
    async #poller() {
        const employees = await this.getAllEmployees();
        if(JSON.stringify(employees) != JSON.stringify(this.#emloyeesCache)){
            this.#dataUpdateFn(employees);
            this.#emloyeesCache = employees;
        }
    }
    async addEmployee(employee) {
        const response = await fetch(this.#baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee),
        });
        return await response.json();
    }
    #getUrl(id) {
        return `${this.#baseUrl}/${id}`;
    }
    async getEmployee(id) {
        const response = await fetch(this.#getUrl(id));
        return await response.json();
    }
    async removeEmployee(id) {
        const response = await fetch(this.#getUrl(id), {
            method: 'DELETE',
        });
        return await response.json();
    }
    async getAllEmployees() {
        const response = await fetch(this.#baseUrl);
        return await response.json();
    }
    async updateEmployee(employee) {
        const response = await fetch(this.#getUrl(employee.id), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee),
        });
        return await response.json();
    }
    async getStatistics(field, interval, employees) {
        let array = employees ? employees : await this.getAllEmployees();
        const currentYear = new Date().getFullYear();

        if (field == 'birthYear') {
            array = array.map((e) => ({ age: currentYear - e.birthYear }));
            field = 'age';
        }
        const statisticsObj = count(array, field, interval);
        return Object.entries(statisticsObj).map((e) => {
            const min = e[0] * interval;
            const max = min + interval - 1;
            return { min, max, count: e[1] };
        });
    }
}