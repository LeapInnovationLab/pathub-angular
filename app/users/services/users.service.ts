import {Http} from 'angular2/http'
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable'
import {Injectable} from 'angular2/core'
import {User} from '../interfaces/user'

@Injectable()
export class UsersService {
    private _url = "http://jsonplaceholder.typicode.com/users"
    
    constructor(private _http: Http) {
        
    }
    
    all() : Observable<[User]> {
        return this._http.get(this._url).map(res => res.json())
    }
}