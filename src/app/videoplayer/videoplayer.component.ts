import { Component, OnInit, Input } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Video } from '../interfaces/video';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {

  @Input() test:any;
  videos: Video[];
  constructor(public playlistService: PlaylistService) {  }

  ngOnInit(){  
    this.videos = this.playlistService.getAllVideo();
    this.playlistService.onYouTubeIframeAPIReady();
  }
  
  from(){
    this.playlistService.onYouTubeIframeAPIReady();
  }
}