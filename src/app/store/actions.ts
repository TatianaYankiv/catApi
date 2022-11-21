import {createAction, props} from '@ngrx/store';
import { Breed, Card } from '../shared/card.models';

export const selectBreed = createAction('Select Breed', props<{breed: string}>());
export const selectCount = createAction('Select Count', props<{count: string}>());
export const fetchCards = createAction('Fetch Cards');
export const fetchCardsSuccess = createAction('Fetch Cards Success', props<{cards: Card[]}>());
export const fetchCardsError = createAction('Fetch Cards Error');
export const fetchBreeds = createAction('Fetch Breeds');
export const fetchBreedsSuccess = createAction('Fetch Breeds Success', props<{breeds: Breed[]}>());
