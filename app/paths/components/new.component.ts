import {Component} from 'angular2/core'
import {Router, CanDeactivate} from 'angular2/router'

@Component({
    template: `
        <h2>New Path</h2>
        <div class="row">    
            <div class="col-md-6">    
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
            </div>
            <div class="col-md-6">
            
            </div>
        </div>
    `
})
export class PathsNewComponent implements CanDeactivate {
    constructor(private _router: Router) {
        
    }
    onSubmit(form) {
        this._router.navigate(['/Paths', 'Index'])
    }
    
    routerCanDeactivate(next, prev) {
        // if (this.form.dirty)
        return confirm('Are you sure you want to leave this page?')
    }
}