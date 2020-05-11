import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaylistComponent,
    VideoplayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
