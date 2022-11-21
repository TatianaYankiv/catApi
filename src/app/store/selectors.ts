import {CardState} from './reducer';
import {createSelector} from '@ngrx/store'
export interface AppState{
    cards: CardState
}

export const selectCardState = (state: AppState) => state.cards

export const selectBreed = createSelector(
    selectCardState,
    (state)=> state.breeds
)
export const selectCards = createSelector(
    selectCardState,
    (state)=> state.cards
)
export const selectLoading = createSelector(
    selectCardState,
    (state)=> state.loading
)