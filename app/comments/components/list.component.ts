import {Component, Input} from 'angular2/core'

@Component({
    selector: 'comments-list',
    template: `
        <div class="media" *ngFor="#comment of data; #i = index;">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="http://lorempixel.com/50/50/people/{{ i }}" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ comment.name }}</h4>
                <p>{{ comment.body }}</p>
            </div>
        </div>
    `        
})
export class CommentsListComponent {
    @Input() data = []
}