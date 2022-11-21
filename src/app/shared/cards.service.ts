import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Breed, Card } from './card.models';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  api_key = 'live_5XxrdGlAV06c6ULzciF4C7bovAUMMDiwTH1GiTu3U8HZHHKcKsu8IugvaFvy82fa'

  fetchCards(breed: string,  limit: string): Observable<Card[]> {
    return this.http.get<Card[]>('https://api.thecatapi.com/v1/images/search', {
      params: {
        limit,
        api_key:
          this.api_key,
        breed_id: breed,
      },
    });
  }
  fetchBreeds(){
    return this.http.get<Breed[]>('https://api.thecatapi.com/v1/breeds', {
      params: {
        api_key:
          this.api_key,
      },
    });
  }
}
