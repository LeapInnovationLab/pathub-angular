import {Component} from 'angular2/core';
import {SignUpFormComponent} from './signup-form.component'

@Component({
    selector: 'my-app',
    template: `
        <signup-form></signup-form>
    `,
    directives: [SignUpFormComponent]
})
export class AppComponent { }