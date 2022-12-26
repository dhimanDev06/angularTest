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

  getValConcatMap:any = [];
  concatMapCall(){
    this.getValConcatMap = []
    from([this.api.getPosts(),this.api.getRepos(),this.api.getList()])
      .pipe(concatMap(x => x))
      .subscribe(x =>{ 
      this.getValConcatMap.push(x);
      console.log("concatMap ->",this.getValConcatMap);
    })
    // setTimeout(() => {
    //   from([this.api.getRepos(),this.api.getList(),this.api.getPosts()])
    //   .pipe(switchMap(x => x))
    //   .subscribe(x =>{ 
    //   console.log("switchMap ->",x);
    // })
    // }, 5000);

  }

  mergeMapCall(){
    let a:any = [];
    from([this.api.getPosts(),this.api.getRepos(),this.api.getList()])
    .pipe(mergeMap(x => x))
    .subscribe(x => {
      a.push(x);
      console.log("mergeMap ->",x,a);
    })
  }
  
  normalApi(){
    this.api.getPosts().pipe(map((res:any)=>{
      return res.map((a:any)=>a.id)
    })).subscribe(res =>{
      console.log("getPosts",res);
    });
    this.api.getRepos().subscribe(res =>{
      console.log(res);
    });
    this.api.getList().subscribe(res =>{
      console.log(res);
    });
  }

}
