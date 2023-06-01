import employeesConfig from '../config/employees-config.json' assert { type: 'json' };
export default class EmployeeForm {
    #dataObj;
    #formElement;
    constructor(parentId) {
        const parentElement = document.getElementById(parentId);
        this.#dataObj = {};
        this.#fillForm(parentElement, parentId);
        this.#setElements(parentId);
    }

    #fillForm(parentElement, parentId) {
        const departmentOptions = employeesConfig.departments
            .map((dept) => `<option value="${dept}">${dept}</option>`)
            .join('');

        parentElement.innerHTML = `
            <form class="form-control" id="${parentId}-form-id">
                <input type="text" name="name" placeholder="enter name" required>
                <input type="number" name="birthYear" min="1950" max="2003" placeholder="enter birth year" required>
                <select name="department" required>
                    <option value="" disabled selected>Select a department</option>
                    ${departmentOptions}
                </select>
                <div class="radio-group">
                    <div class="radio-control">
                        <input id="female-id" type="radio" name="gender" required value="female" unchecked>
                        <label for="female-id">Female</label>
                    </div> 

                    <div class="radio-control">
                        <input id="male-id" type="radio" name="gender" required value="male" unchecked>
                        <label for="male-id">Male</label>
                    </div>                 
                </div>   
                <input type="number" name="salary" min="7000" max="50000" placeholder="enter salary" required>
                <button type="submit">Submit</button>
            </form>`;
    }

    #setElements(parentId) {
        this.#formElement = document.getElementById(`${parentId}-form-id`);
    }

    addHandler(submitFn) {
        this.#formElement.onsubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(this.#formElement);
            this.#dataObj.name = formData.get('name');
            this.#dataObj.birthYear = formData.get('birthYear');
            this.#dataObj.department = formData.get('department');
            this.#dataObj.gender = formData.get('gender');
            this.#dataObj.salary = formData.get('salary');
            await submitFn(this.#dataObj);
        };
    }
}
