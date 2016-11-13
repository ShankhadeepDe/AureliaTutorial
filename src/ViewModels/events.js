import {useView} from 'aurelia-framework';

@useView('Views/events.html')
export class Events{
    constructor(){
        this.childProperty = "Event child ViewModel";
        this.events = [
            {id:'NV01',title:'Catch-22'},
            {id:'NV02',title:'The Great Gatsby'}]
    }
}