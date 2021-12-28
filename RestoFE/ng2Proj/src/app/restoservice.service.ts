import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RestoserviceService {

  constructor(private http: HttpClient) { }
  urlread='http://localhost:4500/resto/read'
  urlupdate='http://localhost:4500/resto/update'
  urldelete='http://localhost:4500/resto/delete'
  urlcreate='http://localhost:4500/resto/create'
  readResto(){
    try{
      return new Promise((resolve, reject)=>{
        console.log("success");
        
        this.http.post(this.urlread,{})
        .subscribe(
          res =>{
            return resolve(res)
          },
          err => {
            return reject(err);
          }
        );
      });
    } catch(err)
    {
      return Promise.reject();
    }
}

updateResto(name: any, quantity: any){
  try{
    return new Promise((resolve, reject)=>{
      console.log("success");
      
      this.http.post(this.urlupdate,{name, quantity})
      .subscribe(
        res =>{
          console.log(res)
          return resolve(res)
        },
        err => {
          return reject(err);
        }
      );
    });
  } catch(err)
  {
    return Promise.reject();
  }
}

deleteResto(name: any){
  try{
    return new Promise((resolve, reject)=>{
      console.log("ss",name);
      
      this.http.post(this.urldelete,{name})
      .subscribe(
        res =>{
          console.log(res)
          return resolve(res)
        },
        err => {
          return reject(err);
        }
      );
    });
  } catch(err)
  {
    return Promise.reject();
  }
}
createResto(name: any, type: any, quantity:any){
  try{
    return new Promise((resolve, reject)=>{
      console.log("ss",name);
      
      this.http.post(this.urlcreate,{name, type, quantity})
      .subscribe(
        res =>{
          console.log(res)
          return resolve(res)
        },
        err => {
          return reject(err);
        }
      );
    });
  } catch(err)
  {
    return Promise.reject();
  }
}
  }

