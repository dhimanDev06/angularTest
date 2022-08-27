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

  constructor(
    private storeC: Store<{ count: number }>,
    private router:Router 
    ) {
    this.count$ = storeC.pipe(select('count'));    
  }

  goToPage(url:string){    
    this.router.navigateByUrl(`store/${url}`);
  }
  increment() {
    this.storeC.dispatch(increment());
  }

  decrement() {
    this.storeC.dispatch(decrement());
  }

  reset() {
    this.storeC.dispatch(reset());
  }
  ngOnInit(): void {
  }

}
