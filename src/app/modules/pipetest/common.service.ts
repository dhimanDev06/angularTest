import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isDesc: boolean = false;
  column: string = '';
  dynamicSortby(property:string,array:any,event:any,tableId:string){

    let parentClass = document.getElementById(tableId) as HTMLElement;
    for (let index = 0; index < parentClass.children.length; index++) {
      if(parentClass.children[index].getAttribute('id') != event.target.id){
        if(parentClass.children[index].classList.contains('up')){
          parentClass.children[index].classList.remove('up')
        }

        if(parentClass.children[index].classList.contains('down')){
          parentClass.children[index].classList.remove('down')
        }
      }else{
        if(parentClass.children[index].classList.contains('down')){
          parentClass.children[index].classList.remove('down')
          parentClass.children[index].classList.add('up')
        }else{
            parentClass.children[index].classList.remove('up')
            parentClass.children[index].classList.add('down')
        } 
      }
    }
    this.isDesc = !this.isDesc; 
    this.column = property;
    let direction = this.isDesc ? 1 : -1;
    array.sort((a:any, b:any)=>{
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
    return array;
  }
  constructor(private httpClient: HttpClient) { }
  getPosts() {
    return this.httpClient.get('http://jsonplaceholder.typicode.com/posts');
  }
  getUsers() {
    return this.httpClient.get('http://jsonplaceholder.typicode.com/users');
  }
  getRepos() {
    return this.httpClient.get('https://api.github.com/orgs/angular/repos');
  }
  getList(s: any = null) {
    if (s) {
      return this.httpClient.get(`https://reqres.in/api/unknown/${s}`);
    }
    return this.httpClient.get('https://reqres.in/api/unknown');
  } 
  getComments() {
    return this.httpClient.get('http://jsonplaceholder.typicode.com/comments');
  }
}
