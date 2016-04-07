import {Component} from 'angular2/core'
import {Router} from 'angular2/router'

@Component({
    template: `
        <h1>New Path</h1>
        <hr />
        <form #f="ngForm" (ngSubmit)="onSubmit(f.form)">
            <div class="form-group">
                <label for="name">Name</label>
                <input 
                    ngControl="name" 
                    #name="ngForm" 
                    id="name" 
                    type="text" 
                    class="form-control" 
                    required>
                <div *ngIf="name.touched && name.errors">
                    <div 
                        class="alert alert-danger" 
                        *ngIf="name.errors.required">
                        Name is required.
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" type="submit" [disabled]="!f.valid">Submit</button>
        </form>
    `
})
export class NewPathComponent {
    constructor(private _router: Router) {
        
    }
    onSubmit(form) {
        this._router.navigate(['Paths'])
    }
}