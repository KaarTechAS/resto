import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RestoserviceService {

  constructor(private http: HttpClient) { }
  url='http://localhost:4500/resto/read'
  fetchresto(){
    try{
      return new Promise((resolve, reject)=>{
        console.log("success");
        
        this.http.post(this.url,{})
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
  }

