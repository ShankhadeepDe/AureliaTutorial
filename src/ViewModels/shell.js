import {useView} from 'aurelia-framework';

@useView('Views/shell.html')
export class Shell {
    constructor() {
        this.parentProperty = "Parent ViewModel";
    }
}