import {Component} from 'angular2/core'
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common'
import {EmailValidators} from '../classes/emailValidators'

@Component({
    selector: 'signup-form',
    templateUrl: 'app/users/templates/signup-form.component.html'
})
export class SignUpFormComponent {
    // form = new ControlGroup({
    //     firstName: new Control('', Validators.required)
    //     lastName: new Control('', Validators.required)
    // })
    
    form: ControlGroup;
    
    constructor(fb: FormBuilder){
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                EmailValidators.cannotContainSpace
            ]), EmailValidators.shouldBeUnique ],
            password: ['', Validators.required]
        })
    }
    
    signup() {
        console.log(this.form.value)
        
        this.form.find('password').setErrors({
            invalidPassword: true
        })
    }
}