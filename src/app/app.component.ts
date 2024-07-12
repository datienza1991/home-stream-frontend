import {
  Component,
  ElementRef,
  OnInit,
  Signal,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { PlayList } from './model/IPlayList';
import { PlaylistDataService } from './services/video/playlist-data.service';
import { Observable, catchError, map, of, single } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title: string = 'Home Stream';
  public src: string = '';
  public playlist: Signal<PlayList[] | undefined> = signal([
    {
      id: 0,
      title: '',
      src: '',
      type: 'video/mp4',
    },
  ]);
  public currentIndex = 0;

  private readonly videoDataService = inject(PlaylistDataService);

  constructor() {
    this.playlist = toSignal(this.videoDataService.fetchAll());
  }
  ngOnInit(): void {
    const list = this.playlist();

    if (list === undefined) {
      return;
    }

    this.src = list![this.currentIndex].src;
  }

  nextVideo() {
    console.log('ended');
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }
  }

  onClickPlaylistVideo(value: any) {
    const { item, index } = value;
    this.currentIndex = index;
    this.src = this.playlist()![this.currentIndex].src;
  }
}
