import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  url='/api';
  constructor(
    private http: HttpClient
  ) { }

  getForo()
  {
    return this.http.get(this.url);
  }

  addForo(foro:any){
    return this.http.post(this.url, foro);
  }

  getComment(id:any){
    return this.http.get(this.url+'/'+id);
  }
}


export interface Foro{
  id?:any;
  user?:string;
  topic?:string;
  comment1?:string;
  comment2?:string;
  comment3?:string;
}