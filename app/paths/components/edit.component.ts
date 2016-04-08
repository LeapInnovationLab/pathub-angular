import {Component} from 'angular2/core'
import {RouteParams} from 'angular2/router'

import {PathsFormComponent} from '../components/form.component'

@Component({
    template: `
        <h2>Edit Path</h2>
        <div class="row">    
            <div class="col-md-12">    
                <paths-form [pathId]="pathId"></paths-form>
            </div>
        </div>
    `,
    directives: [PathsFormComponent]
})
export class PathsEditComponent {
    pathId = ""
    
    constructor(private _routeParams: RouteParams) {
        this.pathId = _routeParams.get('id')
    }
}