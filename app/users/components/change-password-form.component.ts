import {Component} from 'angular2/core'
import {ControlGroup, FormBuilder, Validators} from 'angular2/common'
import {PasswordValidators} from '../classes/password-validators'

@Component({
    selector: 'change-password-form',
    templateUrl: 'app/users/templates/change-password-form.component.html'
})
export class ChangePasswordComponent {
    form: ControlGroup
    
    constructor(fb: FormBuilder){
        this.form = fb.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', Validators.required],
            confirmPassword: ['', Validators.compose([
                Validators.required
            ])],            
        }, { validator: PasswordValidators.notMatch })
    }
    
    changePassword() {
        console.log(this.form.value)
        var currentPass = this.form.find('currentPassword')
        if (currentPass.value != 'admin456')
            currentPass.setErrors({
                invalidPassword: true
            })
        else    
            alert("Password updated succesfully")
    }
}