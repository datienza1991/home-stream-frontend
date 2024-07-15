import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlaylistComponent } from './video-playlist.component';

describe('VideoPlaylistComponent', () => {
  let component: VideoPlaylistComponent;
  let fixture: ComponentFixture<VideoPlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoPlaylistComponent]
    });
    fixture = TestBed.createComponent(VideoPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
