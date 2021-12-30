import { Component, OnInit } from '@angular/core';
import { RestoserviceService } from '../restoservice.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
//import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-ng2',
  templateUrl: './ng2.component.html',
  styleUrls: ['./ng2.component.scss']
})
export class Ng2Component implements OnInit {
  
  // imageUrl:String="";
 
  
  //   handleImageChange(file: FileList){
  //     this.fileToUpload = file.item(0);
  //     var reader = new FileReader();
  //     reader.onload=(event:any)=>{
  //       this.imageUrl=event.target.result;
  //     }
  //     reader.readAsDataURL(this.fileToUpload);
  //   }
  
  //  uploadImage(imageData){
  //     let name=imageData.name;
  //     let number=imageData.number;
  //     let price=imageData.price;
  //     this.service.uploadImage(name,this.fileToUpload,number,price).subscribe(
  //       data=>{
  //         alert("successfully uploaded");
  //         this.productForm.reset();
  //         this.imageUrl="";
  //       }
  //     );
  //   }























  data:any
  collection:any
  newRes: any
  // url = 'http://localhost:4000/api/upload';
  // public uploader: FileUploader = new FileUploader({ this.url, itemAlias: 'photo' });
  constructor(private _resto: RestoserviceService, public dialog:MatDialog) {
    fileToUpload:File
   }
  
  async ngOnInit(){
      this.collection=await this._resto.readResto();

      // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
      // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      // console.log('ImageUpload:uploaded:', item, status, response);
      // alert('File uploaded successfully');
    //};
  }
  openDialog(name:any, type:any, quantity:any){
    
    this.dialog.open(DialogComponent, {
      width: '100%', height: '100%',
      data:{
        name,
        type,
        quantity
      }
    });
  }
  openDialogNew(){
    this.dialog.open(DialogComponent),{
      width:'100%', height: '100%'
    }
  }
  
  
}
