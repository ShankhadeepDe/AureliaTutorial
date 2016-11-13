import {useView} from 'aurelia-framework';

@useView('Views/event.html')
export class Event{    
        activate(bindingContext){
            this.item = bindingContext;
        }
    
}