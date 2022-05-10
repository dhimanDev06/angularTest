import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  getPosts(){
    return this.httpClient.get('http://jsonplaceholder.typicode.com/posts');
  }

  getRepos(){
    return this.httpClient.get('https://api.github.com/orgs/angular/repos');
  }
  getList(s:any = null){
    if(s){
      return this.httpClient.get(`https://reqres.in/api/unknown/${s}`);
    }
    return this.httpClient.get('https://reqres.in/api/unknown');
  }
}
