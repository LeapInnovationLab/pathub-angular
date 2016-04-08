import {Component, OnInit} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http'

import {UsersService} from '../services/users.service'

@Component({
    template: `
        <h2>People</h2>
        <hr />
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-2x"></i>
        </div>
        <div class="row">
            <div class="col-md-6" *ngFor="#user of users; #i = index; #isEven = even" style="padding: 10px 0;">
                <div class="media">
                    <a href="#" class="pull-left">        
                        <img src="http://lorempixel.com/64/64/people/{{ i }}" class="media-object img-thumbnail" >      
                    </a>                    
                    <div class="media-body">
                        <h3 class="media-heading">
                            <strong><a href="#">{{ user.name }}</a></strong>
                            <small>@{{ user.username }}</small>
                        </h3>
                        <p class="text-muted">Software Architec, Musicians, Love Pets, etc</p>
                    </div>
                </div>    
            </div>
        </div>        
    `,
    providers: [UsersService, HTTP_PROVIDERS]
})
export class UsersBrowse implements OnInit{
    isLoading = true
    users = []
    
    constructor(private _userService: UsersService) {
        
    }
    
    ngOnInit(){
        this._userService.all().subscribe( data => {
            this.isLoading = false
            this.users = data
        })
    }
}