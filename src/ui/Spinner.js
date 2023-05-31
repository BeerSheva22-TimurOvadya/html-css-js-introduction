export default class Spinner {
    constructor(parentId) {
        this.spinnerElement = document.createElement('div');
        this.spinnerElement.classList.add('spinner'); 
        document.getElementById(parentId).appendChild(this.spinnerElement);
        this.stop();
    }

    start() {
        this.spinnerElement.style.display = 'block';
    }

    stop() {
        this.spinnerElement.style.display = 'none';
    }
}