import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Store} from '@ngrx/store'
import { of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { CardsService } from '../shared/cards.service';
import {fetchBreeds, fetchCards, fetchCardsSuccess, fetchBreedsSuccess, fetchCardsError} from './actions'
import { AppState, selectCardState } from './selectors';
 
@Injectable()
export class CardsEffects {
 
  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCards),
      withLatestFrom(this.store.select(selectCardState)),
      switchMap(([, {count, breed}]) => {
        console.log(breed)
        return this.cardsService.fetchCards(breed, count)
        .pipe(
          map(cards => fetchCardsSuccess({cards})),
          catchError(() => of(fetchCardsError()))
        )
      }
      )
    )
  );
  loadBreeds$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fetchBreeds),
    switchMap(() => this.cardsService.fetchBreeds()
      .pipe(
        map(breeds => fetchBreedsSuccess({breeds})),
      )
    )
  )
);
 
  constructor(
    private actions$: Actions,
    private cardsService: CardsService,
    private store: Store<AppState>
  ) {}
}