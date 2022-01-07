import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FileSelectDirective,FileUploader} from 'ng2-file-upload';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class RestoserviceService {
  
  
  //uploader:FileUploader=new FileUploader({url:this.urluploadImg})
  constructor(private http: HttpClient) { }

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
        console.log(name);
        
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
        
        console.log(name,"service");
        
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
        console.log(name);
        
        this.http.post(this.urldownImg,{name})
        .subscribe(
          res =>{
            console.log(res);
            
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
      
        // var body={name:nam}
        // console.log(body);
        
        // this.http.post(this.urldownImg,body,{
        //   responseType:'blob',
        //   headers:new HttpHeaders().append('Content-Type','application/json')
        // })
        
  }
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

async updateResto(name: any, quantity: any){
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
  finally{
    await this.readResto()
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
uploadFile(img: File, name:any){
  try{
    console.log(img);
    
    return new Promise((resolve, reject)=>{
      this.http.post(this.urluploadImg,{name,img})
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
postFile(name:any, fileToUpload:File){
const formData: FormData =new FormData();
formData.append('fileKey',fileToUpload,fileToUpload.name)
return this.http
.post(this.urluploadImg, formData, name )
}
}
