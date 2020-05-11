import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Video } from '../interfaces/video';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  video: Video;
  videoTitle: string;
  videoUrl: string;
  videoId:string;

  @Output() fromPlayList= new EventEmitter();

  constructor( public playlistService: PlaylistService) { }

  VIDEO: Video[] = this.playlistService.getAllVideo();

  addVideo(){
    this.VIDEO.push({
      playListId: 'player' + this.VIDEO.length,
      videoTitle: this.videoTitle,
      videoUrl: this.videoUrl.slice(-11),
      flag: true
    });
    this.videoTitle='';
    this.videoUrl='';
    this.fromPlayList.emit();
  }

  ngOnInit() {}

  stop(index:number){
    this.playlistService.videoController[index].stopVideo();
  }

  pause(index:number){
    this.playlistService.videoController[index].pauseVideo();
  }

  play(index:number){
     this.playlistService.videoController[index].playVideo();
  }
}
