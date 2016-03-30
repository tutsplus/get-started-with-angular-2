import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http'
import {Ytube} from './video';
import {YtubeService} from './ytube.service';

@Component({
    selector: 'my-tube',
    templateUrl:'../templates/tube.html',
    providers: [HTTP_PROVIDERS,YtubeService]
})
export class TubeComponent implements OnInit{ 
    
    errorMessage: string;
    videos: Ytube[];
    selectedID:string;
    vidLink:string;
    display:string;
    
    constructor (private _ytubeService: YtubeService) {}
    
    vidSelect(video: string) {
        this.selectedID = video;
        this.vidLink = `https://www.youtube.com/embed/${this.selectedID}`;
    }
    
    ngOnInit() { this.getVideos();}
    
    getVideos() {
        this._ytubeService.getVideos()
            .subscribe(
                videos => this.videos = videos,
                error => this.errorMessage = <any>error
            );
            
    }
    
    goBack(){
        
        this.vidLink = null;
        
    }
}