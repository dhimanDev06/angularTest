import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { concatMap, mergeMap, switchMap, map, take, delay } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { from, of } from "rxjs";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
  }

  nestedCall(){
    this.api.getList()
    .pipe(
      concatMap((result:any) => 
      this.api.getList(result.data[2].id))
    ).subscribe((result1) => {
      console.log(result1);
    });
  }

  forkJoinCall(){
    forkJoin([this.api.getPosts(),this.api.getRepos(),this.api.getList()]).subscribe(results => {
      console.log("forkJoin",results);
    });
  }

  concatMapCall(){
    from([this.api.getPosts(),this.api.getRepos(),this.api.getList()])
      .pipe(concatMap(x => x))
      .subscribe(x => console.log("concatMap ->",x))
  }

  mergeMapCall(){
    from([this.api.getPosts(),this.api.getRepos(),this.api.getList()])
    .pipe(mergeMap(x => x))
    .subscribe(x => console.log("mergeMap ->",x))
  }
  
  normalApi(){
    this.api.getPosts().subscribe(res =>{
      console.log(res);
    });
    this.api.getRepos().subscribe(res =>{
      console.log(res);
    });
    this.api.getList().subscribe(res =>{
      console.log(res);
    });
  }

}
