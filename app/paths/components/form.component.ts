import {Component, OnInit, Input} from 'angular2/core'
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common'
import {HTTP_PROVIDERS} from 'angular2/http'
import {Router} from 'angular2/router'

import {Post} from '../interfaces/post'
import {PostService} from '../services/post.service'

@Component({
    selector: 'paths-form',
    template: `
        <form [ngFormModel]="form" (ngSubmit)="submit()">
            <div class="form-group">
                <label for="name">Name</label>
                <input 
                    [(ngModel)]="path.title"
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
                
                <label for="description">Description</label>
                <textarea
                    [(ngModel)]="path.body"
                    ngControl="description"
                    #desc="ngForm"
                    id="description"
                    class="form-control"
                    rows="5"
                    required>
                </textarea>
                <div *ngIf="desc.touched && desc.errors">
                    <div class="alert alert-danger" *ngIf="desc.errors.required">Please describe what is this path about</div>
                </div>
            </div>
            <button class="btn btn-primary" type="submit" [disabled]="!form.valid">Submit</button>
            <button class="btn btn-default" (click)="cancel($event)">Cancel</button>
        </form>
    `,
    providers: [PostService, HTTP_PROVIDERS]
})
export class PathsFormComponent implements OnInit{
    @Input() pathId
    path : Post
    
    form: ControlGroup
    
    constructor(fb: FormBuilder, private _postService: PostService, private _router: Router){
        this.form = fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        })
        this.path = { title: '', body: '', userId: ''}
    }
    
    ngOnInit(){
        if (this.pathId) {
            this._postService.getPost(this.pathId).subscribe( data => {
                this.path = data
            })          
            console.log("ID::::" + this.pathId)      
        }        
    }
    
    submit() {
        console.log(this.form)                
    }
    
    cancel($event){
        $event.stopPropagation()
        console.log("Cancel Paths Form")
        this._router.navigate(['/Paths', 'Index'])
        return false
    }
}