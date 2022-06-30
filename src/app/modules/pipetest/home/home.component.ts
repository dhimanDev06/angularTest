import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { concatMap, mergeMap, switchMap, map, take, delay } from 'rxjs/operators';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isDesc: boolean = false;
  column: string = '';
  constructor(
    private service: CommonService
  ) { }

  userList:any;
  commentsList:any;
  ngOnInit(): void {
    this.getPostsAll();
  }
  getPostsAll() {
    this.service.getUsers().subscribe(res => {
      this.userList = res;
      console.log(res);
    })
  }
  getCommentsAll() {
    this.service.getComments().subscribe(res => {
      this.commentsList = res;
      console.log(res);
    })
  }
  sortby(property:string,event:any,tbleId:string){
    console.log();
    
    this.userList  = this.service.dynamicSortby(property,this.userList,event,tbleId);
  }
  sortby1(property:string,event:any,tbleId:string){
    this.commentsList  = this.service.dynamicSortby(property,this.commentsList,event,tbleId);
  }
  nestedCall() {
    this.service.getList()
      .pipe(
        concatMap((result: any) =>
          this.service.getList(result.data[2].id))
      ).subscribe((result1) => {
        console.log(result1);
      });
  }


  divClick(){
    console.log('divClick')
  }

  btnClick(){
    console.log('btnClick');
    this.getCommentsAll();
  }
}
