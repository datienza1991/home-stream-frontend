import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Video } from '../model/IVideo';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl: string = 'http://192.168.1.3/api.php/records';

  public fetchAll(): Observable<Video[]> {
    return this.http
      .get<{ records: { id: number; name: string; url: string }[] }>(
        `${this.baseUrl}/videos`
      )
      .pipe(
        map((results) =>
          results.records.map(
            (value) =>
              ({
                id: value.id,
                title: value.name,
                src: value.url,
                type: 'video/mp4',
              } as Video)
          )
        )
      );
  }
}
