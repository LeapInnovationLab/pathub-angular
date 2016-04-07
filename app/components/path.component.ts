import {Component, OnInit} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router'

import {PostService} from '../services/post.service'

@Component({
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div *ngIf="!isLoading">
            <h1>{{ path.title  }}</h1>
            <hr />
            <p>
                {{ path.body }}
            </p>
            <hr />
            <a [routerLink]="['Paths']">Back to Paths</a>
        </div>
    `,
    providers: [HTTP_PROVIDERS, PostService],
    directives: [ROUTER_DIRECTIVES]
})
export class PathComponent implements OnInit{
    isLoading = true
    path;
    
    constructor(private _postService: PostService, private _routeParams: RouteParams){
        
    }
    
    ngOnInit() {
        this._postService.getPost(this._routeParams.get('id')).subscribe( data => {
            this.isLoading = false
            this.path = data
        })
    }
}