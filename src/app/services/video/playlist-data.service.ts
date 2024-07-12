import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PlayList } from 'src/app/model/IPlayList';

@Injectable({
  providedIn: 'root',
})
export class PlaylistDataService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl: string = 'http://localhost:3000/api';

  public fetchAll(): Observable<PlayList[]> {
    return this.http
      .get<{ data: { id: number; name: string; url: string }[] }>(
        `${this.baseUrl}/videos`
      )
      .pipe(
        map((results) =>
          results.data.map(
            (value) =>
              ({
                id: value.id,
                title: value.name,
                src: value.url,
                type: 'video/mp4',
              } as PlayList)
          )
        )
      );
  }
}
