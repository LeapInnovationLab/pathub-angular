import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'

import {PathsShowComponent} from '../components/show.component'
import {PathsIndexComponent} from '../components/index.component'
import {PathsNewComponent} from '../components/new.component'

@RouteConfig([
    { path: '/', name: 'Index', component: PathsIndexComponent, useAsDefault: true },
    { path: '/:id', name: 'Show', component: PathsShowComponent },
    { path: '/new', name: 'New', component: PathsNewComponent },
])
@Component({
    template: `
        <h1>
            <div class="pull-right text-muted">Paths</div>
            <div class="clearfix"></div>
        </h1>
        <hr />        
        <router-outlet></router-outlet>        
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class PathsComponent {
    
}