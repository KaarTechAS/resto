import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subscription } from 'rxjs/internal/Subscription';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class RestoserviceService {
  private subj = new Subject<any>();
  obs$ = this.subj.asObservable();
  

  constructor(private http: HttpClient, ) { }
  
  callMethod(){
    this.subj.next();
  }
  urlread='/resto/read'
  urlupdate='/resto/update'
  urldelete='/resto/delete'
  urlcreate='/resto/create'
  urluploadImg='/resto/updimg';
  urldownImg='/resto/dwnimg'
  urldwnImgfb='/resto/dwnimgfb'
  urldelImgfb='/resto/deleteimgfb'

  deleteImgfb(name:any){
    try{
      return new Promise((resolve, reject)=>{
        this.http.post(this.urldelImgfb,{name})
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

  dwnImgfb(name: any){
  
    try{
      return new Promise((resolve, reject)=>{
         this.http.post(this.urldwnImgfb,{'name':name},{responseType: 'text' })
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
  dwnldResto(name:any){
   
    try{
      return new Promise((resolve, reject)=>{
        
        this.http.post(this.urldownImg,{name})
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
  readResto(){
    try{
      return new Promise((resolve, reject)=>{
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

async updateResto(name: any, quantity: any){
  try{
    return new Promise((resolve, reject)=>{   
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
  finally{
    await this.readResto()
  }
}

deleteResto(name: any){
  try{
    return new Promise((resolve, reject)=>{
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
// uploadFile(img: File, name:any){
//   try{
//     console.log(img);
    
//     return new Promise((resolve, reject)=>{
//       this.http.post(this.urluploadImg,{name,img})
//       .subscribe(
//         res =>{
//           console.log(res)
//           return resolve(res)
//         },
//         err => {
//           return reject(err);
//         }
//       );
//     });
//   } catch(err)
//   {
//     return Promise.reject();
//   }
// }
// postFile(name:any, fileToUpload:File){
// const formData: FormData =new FormData();
// formData.append('fileKey',fileToUpload,fileToUpload.name)
// return this.http
// .post(this.urluploadImg, formData, name )
// }
}
