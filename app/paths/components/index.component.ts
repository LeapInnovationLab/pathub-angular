import {Component, OnInit} from 'angular2/core'
import {ControlGroup, FormBuilder} from 'angular2/common'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'

import 'rxjs/add/operator/debounceTime'

import {CommentsListComponent} from '../../comments/components/list.component'
import {PaginationComponent} from '../../shared/components/pagination.component'
import {PostService} from '../services/post.service'
import {SpinnerComponent} from '../../shared/components/spinner.component'

@Component({
    selector: 'paths',
    template: `
        <div class="row">
            <div class="col-md-6">
                <form [ngFormModel]="form">
                    <input id="search" type="text" ngControl="search" class="form-control" placeholder="Search...">
                </form>                
            </div>
            <div class="col-md-6">
                <div class="pull-right">
                    <a [routerLink]="['/Paths', 'New']" class="btn btn-primary">New</a>            
                </div>
            </div>
        </div>        
        <div class="row paths" style="padding-top: 20px">
            <div class="col-sm-6">
                <spinner [visible]="isLoading"></spinner>
                <pagination [items]="paths" ></pagination>
                <ul class="list-group">                    
                    <li *ngFor="#path of paths" class="list-group-item" (click)="select(path)" [class.active]="currentPath==path">
                        <a [routerLink]="['/Paths/Show', {id: path.id } ]">
                            {{ path.title }}
                        </a>
                    </li>            
                </ul>
            </div>
            <div class="col-sm-6">
                <div *ngIf="currentPath" class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">{{ currentPath.title }}</h3>
                    </div>
                    <div class="panel-body">
                        <p>{{ currentPath.body }}</p>
                        <hr />
                        <h4 class="text-muted">Comments</h4>
                        <spinner [visible]="commentsLoading"></spinner>
                        <comments-list [data]="currentPath.comments"></comments-list>
                    </div>
                </div>
            </div>
        </div>        
    `,
    providers: [HTTP_PROVIDERS, PostService],
    directives: [ROUTER_DIRECTIVES, SpinnerComponent, CommentsListComponent, PaginationComponent],
    styles: [`
        .paths li { cursor: default; }         
        .paths li:hover { 
            background: #dd4814;
        }
        .paths li:hover a, .paths li.active a {
            color: #ffffff;            
        }
        .list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {  
            background-color: #dd4814;  
            border-color: #dd4814;   
            color: #fff; 
        }
    `]
})
export class PathsIndexComponent implements OnInit {
    isLoading = true
    paths = []  
    currentPath;
    commentsLoading;
    form : ControlGroup;
       
    constructor(private _postService: PostService, fb: FormBuilder) {
        // this._postService.createPost({userId: 'sdsfu40893948', body: "Hi There"})
        
        this.form = fb.group({
            search: []
        })
        
        var search = this.form.find('search')
        search.valueChanges.debounceTime(400).subscribe(x => this.filterPaths(x))       
    }
    
    ngOnInit() {
        this.loadPaths()
    }
    
    select(path) {
        this.currentPath = path
        
        this.commentsLoading = true
        this._postService.getComments(path.id).subscribe(
            comments => this.currentPath.comments = comments,
            null,
            () => this.commentsLoading = false
         )
    } 
    
    filterPaths(searchTerm) {
        this.isLoading = true
        if (searchTerm) {
            this.currentPath = null
            var term = Math.floor(Math.random() * 10) + 1              
            this._postService.filter(term).subscribe(data => this.paths = data, null, () => this.isLoading = false)
            console.log(term)            
        } else {
            this.loadPaths()
        }
    }
    
    loadPaths() {
        this.currentPath = null
        this._postService.getPosts().subscribe(data => {
            this.isLoading = false
            // console.log(data)
            this.paths = data
        })
    }
}