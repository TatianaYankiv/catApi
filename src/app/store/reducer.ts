import { createReducer, on } from '@ngrx/store';
import { Breed, Card } from '../shared/card.models';
import { selectBreed, selectCount, fetchCards, fetchCardsError, fetchCardsSuccess, fetchBreedsSuccess } from './actions';

export interface CardState{
    loading: boolean;
    count: string;
    breed: string;
    breeds: Breed[];
    cards: Card[];
    error: any;
}
export const initialState: CardState = {
    loading: false,
    count: '10',
    breed: '',
    cards: [],
    breeds: [],
    error: null
};

export const cardsReducer = createReducer(
  initialState,
  on(selectBreed, (state, {breed}) => {
    return {
        ...state,
        breed,
    }
  }),
  on(selectCount, (state, {count}) => {
    return {
        ...state,
        count,
    }
  }),
  on(fetchCards, (state) => {
    return {
        ...state,
        loading: true
    }
  }),
  on(fetchCardsSuccess, (state, {cards}) => {
    return {
        ...state,
        cards,
        loading: false
    }
  }),
  on(fetchCardsError, (state) => {
    return {
        ...state,
        error: true
    }
  }),
  on(fetchBreedsSuccess, (state, {breeds}) => {
    return {
        ...state,
        breeds
    }
  }),
);