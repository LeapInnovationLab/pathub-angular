import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http' 
import {OnInit} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {NavbarComponent} from './layout/components/navbar.component'
import {PathsComponent} from './paths/components/paths.component'
import {SignUpFormComponent} from './users/components/signup-form.component'
import {UsersBrowse} from './users/components/browse.component'

@RouteConfig([
    {
        path: '/paths/...',
        name: 'Paths',
        component: PathsComponent        
    },
    { path: '/users/browse', name: 'UsersBrowse', component: UsersBrowse },
    { path: '/users/signup', name: 'SignUp', component: SignUpFormComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Paths'] }    
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, NavbarComponent]    
})
export class AppComponent {
    
}