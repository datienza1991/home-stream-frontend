import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Video } from '../../model/IVideo';

@Component({
  selector: 'app-video-playlist',
  templateUrl: './video-playlist.component.html',
  styleUrls: ['./video-playlist.component.scss'],
})
export class VideoPlaylistComponent {
  @Input() public playlist: Video[] = [];
  @Output() public clickPlaylistVideo = new EventEmitter();

  public onClickPlaylistVideo(item: Video, index: number) {
    this.clickPlaylistVideo.emit({ item: item, index: index });
  }
}
