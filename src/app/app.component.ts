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
import { Video } from './features/video/model/IVideo';
import { VideoDataService } from './features/video/services/video-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title: string = 'Home Stream';
  public src: string = '';
  public playlist: Signal<Video[] | undefined> = signal([
    {
      id: 0,
      title: '',
      src: '',
      type: 'video/mp4',
    },
  ]);
  public currentIndex = 0;

  private readonly videoDataService = inject(VideoDataService);

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
