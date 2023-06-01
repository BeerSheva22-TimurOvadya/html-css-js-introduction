export default class DataGrid {
    #tBodyElement
    #keys
    #deletable
    #selectAllCheckbox
    constructor(parentId, columns, deletable = false) {
        //columns - array of objects {field: <name of key>,
        // headerName: <column name>}
        this.#keys = columns.map(c => c.field);
        this.#deletable = deletable;
        this.#buildTableHeader(parentId, columns.map(c => c.headerName))

    }
    fillData(rowsData) {
        this.#tBodyElement.innerHTML = rowsData.map(rd => this.#getRow(rd)).join('');
    }
    #getRow(obj) {
        let row = this.#keys.map(key => `<td>${obj[key]}</td>` ).join('');
        if (this.#deletable) {
            row = `<td><input type="checkbox" class="row-checkbox" data-id="${obj.id}" /></td>` + row;
        }
        return `<tr>${row}</tr>`;
    }
    insertRow(obj) {
        this.#tBodyElement.innerHTML += this.#getRow(obj)
    }
    #buildTableHeader(parentId, columnNames) {
        const tableSectionElement = document.getElementById(parentId);
        let headers = columnNames.map(headerName => `<th>${headerName}</th>`).join('');
        if (this.#deletable) {
            headers = `<th><input type="checkbox" id="${parentId}-check-all" /></th>` + headers;
        }
        tableSectionElement.innerHTML =
            `<table>
                <thead>
                   <tr>
                       ${headers}
                   </tr>
                </thead>
                <tbody id="${parentId}-table" >
                </tbody>
              </table>`;
        this.#tBodyElement = document.getElementById(parentId + "-table");
        if (this.#deletable) {
            this.#selectAllCheckbox = document.getElementById(parentId + "-check-all");
            this.#selectAllCheckbox.addEventListener('change', this.#handleSelectAllChange.bind(this));
        }
    }
    #handleSelectAllChange() {
        const allCheckboxes = this.#tBodyElement.querySelectorAll('.row-checkbox');
        for (const checkbox of allCheckboxes) {
            checkbox.checked = this.#selectAllCheckbox.checked;
        }
    }
    
    getSelectedIds() {
        const selectedCheckboxes = this.#tBodyElement.querySelectorAll('.row-checkbox:checked');
        return Array.from(selectedCheckboxes).map(checkbox => checkbox.dataset.id);
    }
}    