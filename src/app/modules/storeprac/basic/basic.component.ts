import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>,private router:Router ) {
    this.count$ = store.pipe(select('count'));
  }

  goToPage(url:string){    
    this.router.navigateByUrl(`store/${url}`);
  }
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
  ngOnInit(): void {
  }

}
