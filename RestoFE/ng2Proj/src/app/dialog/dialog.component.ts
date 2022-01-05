import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoserviceService } from '../restoservice.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DomSanitizer} from '@angular/platform-browser';
import { FileUploader } from 'ng2-file-upload';

const URL = '/resto/updimg';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

data: any
  updateValue : any
  name: any
  type: any
  quantity: any
  fval: any
  a: any
  public previewPath: any;
  
  constructor(private _rs : RestoserviceService, @Inject(MAT_DIALOG_DATA) public dat:any, private sanitizer: DomSanitizer) {
    
    
   }
   
  resItem = new FormGroup({
    name : new FormControl(),
    type : new FormControl(),
    quantity : new FormControl()
  })
  async ngOnInit(){
    if (this.dat==null){
      console.log("no values to display");
      
    }
    else{
      this.resItem.controls["name"].patchValue(this.dat.name);
    this.resItem.controls["type"].patchValue(this.dat.type)
    this.resItem.controls["quantity"].patchValue(this.dat.quantity)
    
    }
    

    this.uploader.onAfterAddingFile = (file) => { this.previewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file)))}
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    };
  }
  
  public uploader: FileUploader = new FileUploader({ url: URL,additionalParameter:{name:this.resItem.value.name}});
  async updateRes(){
    this.fval=this.resItem.value
    this.updateValue= await this._rs.updateResto(this.fval.name, this.fval.quantity);
  }
  async deleteRes(){
    this.fval=this.resItem.value;
    this.updateValue= await this._rs.deleteResto(this.fval.name)
  }
  async createRes(){
    this.fval=this.resItem.value;
    this.updateValue= await this._rs.createResto(this.fval.name, this.fval.type, this.fval.quantity)

  }
  async download(){
    console.log('download');
    
    var a= await this._rs.dwnldResto(this.resItem.value.name)
  }
}
