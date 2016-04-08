import {Component} from 'angular2/core'
import {Router, CanDeactivate} from 'angular2/router'

import {PathsFormComponent} from '../components/form.component'

@Component({
    template: `
        <h2>New Path</h2>
        <div class="row">    
            <div class="col-md-12">    
                <paths-form></paths-form>
            </div>
        </div>
    `,
    directives: [PathsFormComponent]
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