import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent {
  @Input() public source!: string;
  @Output() public nexVideo = new EventEmitter();
  api!: VgApiService;

  onPlayerSet(api: VgApiService) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(() => {
      this.startVideo();
    });
    this.api
      .getDefaultMedia()
      .subscriptions.ended.subscribe(() => this.nexVideo.emit());
  }

  startVideo() {
    this.api.play();
  }
}
