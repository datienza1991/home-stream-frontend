import { NgModule } from '@angular/core';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VideoPlayerComponent } from './features/video/components/video-player/video-player.component';
import { VideoPlaylistComponent } from './features/video/components/video-playlist/video-playlist.component';

@NgModule({
  declarations: [AppComponent, VideoPlayerComponent, VideoPlaylistComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
