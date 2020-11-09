import {Component} from '@angular/core';

@Component({
    selector: 'first-module', // this is element selector 
    // selector: '[first-module]', // this is attribute selector
    // selector: '.first-module', // this is css selector
    // template: 'hello'
    templateUrl: './first.component.html'
})

export class First{
    username:string = '';
    isDisabled:boolean = true;
    handleUserinput(event:Event){
        if((<HTMLInputElement>event.target).value.length>0){
            this.isDisabled=false;
        }else{
            this.isDisabled = true;
        }
    }
    resetForm(){
        this.username='';
        this.isDisabled = true
    }
};