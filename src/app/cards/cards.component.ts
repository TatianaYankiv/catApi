import { Component, OnInit, Input } from '@angular/core'
import { CardsService } from '../shared/cards.service';
import {AppState, selectCards, selectLoading} from '../store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor(public cardsService: CardsService,  private store: Store<AppState>) {}
  cards$ = this.store.select(selectCards);
  loading$ = this.store.select(selectLoading);
 
  ngOnInit(): void {
  }
}
