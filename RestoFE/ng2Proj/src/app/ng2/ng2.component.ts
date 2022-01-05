import { Component, OnInit} from '@angular/core';
import { RestoserviceService } from '../restoservice.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ImgdialogComponent } from '../imgdialog/imgdialog.component';
import { DomSanitizer} from '@angular/platform-browser';
import { FileUploader } from 'ng2-file-upload';
const URL = '/resto/updimg';
@Component({
  selector: 'app-ng2',
  templateUrl: './ng2.component.html',
  styleUrls: ['./ng2.component.scss']
})

export class Ng2Component implements OnInit {
  public previewPath: any;
  name:any
  downasync:any
  postUrl='/resto/updimg';
  updateValue:any
  readhit:any
data:any
collection:any
newRes: any
fileImg: any;
reader:any
con:any
public currentname:any
  ready = false;
  thumb="";
    

  constructor(private _resto: RestoserviceService, public dialog:MatDialog, private sanitizer: DomSanitizer) {
    
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    };
    this.uploader.onAfterAddingFile = (fileItem) => {
      this.previewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
    }
   }

  
  upFile(name:any){
    console.log(name);
    
  }
  public uploader: FileUploader = new FileUploader({ url: URL,additionalParameter:{name:'Pizza Margherita'}});
  
  async ngOnInit() {
    this.collection=await this._resto.readResto();
 }
 
  
    
   
openDialog(name:any, type:any, quantity:any){
  
  this.dialog.open(DialogComponent, {
    width: '700px', height: '1000px',
    data:{
      name,
      type,
      quantity
    }
  });
}
openDialogImg(name:any){
  this.dialog.open(ImgdialogComponent, {
    width: '700px', height: '1000px',
    data:{
      name
    }
  });
}
openDialogNew(){
  this.dialog.open(DialogComponent),{
    width:'100%', height: '100%',
      create:true
    
  }
}

async delete(name:any){
  this.updateValue= await this._resto.deleteResto(name)
  this.readhit=await this._resto.readResto()
}



}



