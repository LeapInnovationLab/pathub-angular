import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http' 
import {OnInit} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {NewPathComponent} from './components/new-path.component'
import {PathComponent} from './components/path.component'
import {PathsComponent} from './components/paths.component'
import {SignUpFormComponent} from './signup-form.component'

@RouteConfig([
    { path: '/paths', name: 'Paths', component: PathsComponent, useAsDefault: true },
    { path: 'path/:id', name: 'Path', component: PathComponent },
    { path: 'paths/new', name: 'NewPath', component: NewPathComponent },
    { path: '/users/signup', name: 'SignUp', component: SignUpFormComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Paths'] }    
])
@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">PathHub</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a [routerLink]="['Paths']">Paths <span class="sr-only">(current)</span></a>
                    </li>
                    <li>
                        <a href="#">Link</a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li><a [routerLink]="['SignUp']">Join</a></li>
                </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]    
})
export class AppComponent {
    
}