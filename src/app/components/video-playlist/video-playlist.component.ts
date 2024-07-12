import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlayList } from 'src/app/model/IPlayList';

@Component({
  selector: 'app-video-playlist',
  templateUrl: './video-playlist.component.html',
  styleUrls: ['./video-playlist.component.scss'],
})
export class VideoPlaylistComponent {
  @Input() public playlist: PlayList[] = [];
  @Output() public clickPlaylistVideo = new EventEmitter();

  public onClickPlaylistVideo(item: PlayList, index: number) {
    this.clickPlaylistVideo.emit({ item: item, index: index });
  }
}
