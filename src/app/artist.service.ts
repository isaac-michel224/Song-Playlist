import { Injectable } from '@angular/core';
import { Artist } from './artist';
import { ARTISTS } from './mock-artists';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  getArtists(): Observable<Artist[]> {
    this.messageService.add('ArtistService: fetched artists');
    return of (ARTISTS);
  }

  constructor(private messageService: MessageService) { }
}
