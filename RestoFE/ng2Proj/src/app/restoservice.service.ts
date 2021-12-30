import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RestoserviceService {

  constructor(private http: HttpClient) { }
  urlread='/resto/read'
  urlupdate='/resto/update'
  urldelete='/resto/delete'
  urlcreate='/resto/create'
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
// uploadImage(fileToUpload:File, imagename:string, num:string, price:string){
//   let formData:FormData = new FormData();
//   formData.append("file",fileToUpload,fileToUpload.name);
//   formData.append("Imagename",imagename);
//   formData.append("Number",num);
//   formData.append("Price",price);
//   return this.http.post(this.baseUrl+"UploadImage",formData);  
// }
  }

