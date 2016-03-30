import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Ytube} from './video';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class YtubeService {
    
    constructor (private http: Http) {}
    
    private ytubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=tutsplus&type=video&&key=YOUTUBEAPIKEYHERE';
    
    getVideos() {
        return this.http.get(this.ytubeURL)
            .map(res => <Ytube[]> res.json().items)
            .do(data => console.log(data))
            .catch(this.errorHandler);
    }
    private errorHandler (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}