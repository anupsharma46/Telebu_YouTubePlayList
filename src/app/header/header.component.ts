import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../services/playlist.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private playlistService :PlaylistService) { }

  ngOnInit() {
  }

  playAll(){
   this.playlistService.videoController.forEach((player)=>{player.playVideo()});
  }
 
  stopAll(){
    this.playlistService.videoController.forEach((player)=>{player.stopVideo()})
  }

  pauseAll(){
    this.playlistService.videoController.forEach((player)=>{player.pauseVideo()});
  }
}
