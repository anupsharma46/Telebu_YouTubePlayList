import { Component } from '@angular/core';
import { PlaylistService } from './services/playlist.service';
import { Video } from './interfaces/video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(public playlistService: PlaylistService){}

 videos: Video[] = this.playlistService.getAllVideo();

  fromPlaylist(){
    this.playlistService.onYouTubeIframeAPIReady();
  }
}
