import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from './store/selectors';
import { selectBreed } from './store/selectors';
import { fetchCards, selectBreed as selectBreedAction, selectCount } from './store/actions';
import { fetchBreeds } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  breedControl!: FormControl;
  countControl!: FormControl;
  breeds$ = this.store.select(selectBreed);

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.breedControl = new FormControl('');
    this.countControl = new FormControl('10');
    this.store.dispatch(fetchBreeds())
    this.store.dispatch(fetchCards())
  }
  onBreedChange(breed: string){
    this.store.dispatch(selectBreedAction({breed}))
    this.store.dispatch(fetchCards());
  }
  onCountChange(count: string){
    this.store.dispatch(selectCount({count}))
    this.store.dispatch(fetchCards())
  }

}
