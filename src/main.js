import CompanyService from './service/CompanyService.js';
import ApplicationBar from './ui/ApplicationBar.js';
import DataGrid from './ui/DataGrid.js';
import EmployeeForm from './ui/EmployeeForm.js';
import { getRandomEmployee } from './util/random.js';
import statisticsConfig from './config/statistics-config.json' assert { type: 'json' };
import employeesConfig from './config/employees-config.json' assert { type: 'json' };
import { range } from './util/number-functions.js';
import Spinner from './ui/Spinner.js';
const N_EMPLOYEES = 100;

//employee model
//{id: number of 9 digits, name: string, birthYear: number,
// gender: female | male, salary: number, department: QA, Development, Audit, Accounting, Management}
const sections = [
    { title: 'Empolyees', id: 'employees-table-place' },
    { title: 'Add Employee', id: 'employees-form-place' },
    { title: 'Statistics', id: 'statistics-place' },
];
const { minSalary, maxSalary, departments, minYear, maxYear } = employeesConfig;
const { age, salary } = statisticsConfig;
const statisticsIndex = sections.findIndex((s) => s.title == 'Statistics');
const employeeColumns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'birthYear', headerName: 'Birth Year' },
    { field: 'gender', headerName: 'Gender' },
    { field: 'salary', headerName: 'Salary (ILS)' },
    { field: 'department', headerName: 'Department' },
];
const statisticsColumns = [
    { field: 'min', headerName: 'Min value' },
    { field: 'max', headerName: 'Max value' },
    { field: 'count', headerName: 'Count' },
];

const menu = new ApplicationBar('menu-place', sections, menuHandler);

const companyService = new CompanyService();
const employeeForm = new EmployeeForm('employees-form-place');
const employeeTable = new DataGrid('employees-table-place', employeeColumns);
const ageStatistics = new DataGrid('age-statistics-place', statisticsColumns);
const salaryStatistics = new DataGrid('salary-statistics-place', statisticsColumns);
const spinner = new Spinner('menu-place');

function menuHandler(index) {
    if (index == statisticsIndex) {
        spinner.start();  // запуск спиннера перед асинхронными операциями
        Promise.all([
            companyService.getStatistics(age.field, age.interval),
            companyService.getStatistics(salary.field, salary.interval)
        ])
        .then(([ageData, salaryData]) => {
            ageStatistics.fillData(ageData);
            salaryStatistics.fillData(salaryData);
        })
        .finally(() => spinner.stop());  // остановка спиннера после завершения всех операций
    } else if (index == employeesIndex) {
        spinner.start();
        companyService.getAllEmployees()
            .then(data => {
                employeeTable.fillData(data);
            })
            .finally(() => spinner.stop());
    }
}

const employeesIndex = sections.findIndex((s) => s.title == 'Empolyees');

async function run() {
    while (true) {
        await employeeForm.buttonHasPressed();
        spinner.start();
        const employee = getRandomEmployee(minSalary, maxSalary, minYear, maxYear, departments);
        companyService.addEmployee(employee)
            .then(addedEmployee => {
                employeeTable.insertRow(addedEmployee);
                spinner.stop();
            });
    }
}
range(0, N_EMPLOYEES).forEach(() =>
    companyService.addEmployee(getRandomEmployee(minSalary, maxSalary, minYear, maxYear, departments)),
);
run();
