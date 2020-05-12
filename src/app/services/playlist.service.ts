import { Injectable } from '@angular/core';
import { Video } from '../interfaces/video';

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {
  i: number;
  
  public VIDEOS: Video[];
  public videoController=[];
  constructor() { 
    this.VIDEOS=[
                  {playListId: 'player0', videoTitle:'Sample video', videoUrl:'tgbNymZ7vqY', flag: true},
                ]
  }

  getAllVideo(){
    return this.VIDEOS;
  }

  onYouTubeIframeAPIReady() {
    if(typeof this.VIDEOS === 'undefined')
       return; 
      setTimeout(()=>{
        for(this.i = 0; this.i < this.VIDEOS.length; this.i++) {
          if(this.VIDEOS[this.i].flag){
            this.VIDEOS[this.i].flag=false;
          var control = this.createVideoPlayer(this.VIDEOS[this.i]);
          this.videoController.push(control);
          }
        }
      },1000); 
  }

  createVideoPlayer(videoinfo:any) {
      return new window['YT'].Player(videoinfo.playListId, {
         height: '180',
         width: '300',
         videoId: videoinfo.videoUrl,
         events: {
          'onReady': this.onPlayerReady
         }
      });
  }

  onPlayerReady(event:any) {
    event.target.playVideo()
  }
}