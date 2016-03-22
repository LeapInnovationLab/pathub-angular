import {ControlGroup} from 'angular2/common'

export class PasswordValidators{
    
    static notMatch(group: ControlGroup) {
        var controlConfirmPass = group.find('confirmPassword')
        if ( group.find('newPassword').value != controlConfirmPass.value)
           controlConfirmPass.setErrors({ notMatched: true })
            
        return null
    }   
}