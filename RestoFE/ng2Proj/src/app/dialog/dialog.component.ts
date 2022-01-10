import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoserviceService } from '../restoservice.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUploader } from 'ng2-file-upload';


const urlForUpload = '/resto/updimgfb';
const urlForUpdate = "/resto/updateimgfb";
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Output() myEvent: EventEmitter<any> = new EventEmitter<any>()

  function2() {
    this.myEvent.emit(null)
  }
  thumb = '../../assets/upload.png'
  res: any
  resfromfb: any
  finalid: any
  apiValues: any
  defaultImg = "./app/assets/upload.png"
  file: any
  updateValue: any
  name: any
  fval: any
  a: any
  public previewPath: any;

  constructor(private _rs: RestoserviceService, @Inject(MAT_DIALOG_DATA) public dat: any, private sanitizer: DomSanitizer) { }
  resItem = new FormGroup({
    name: new FormControl(),
    type: new FormControl(),
    quantity: new FormControl()
  })
  public uploader: FileUploader = new FileUploader({
    url: urlForUpload,
    additionalParameter: { name: this.dat.name }
  });
  public uploaderUpdate: FileUploader = new FileUploader({
    url: urlForUpdate,
    additionalParameter: { name: this.dat.name }
  });
  async ngOnInit() {

    if (this.dat == null) {
      console.log("no values to display");
    }
    else {
      this.resItem.controls["name"].patchValue(this.dat.name);
      this.resItem.controls["type"].patchValue(this.dat.type)
      this.resItem.controls["quantity"].patchValue(this.dat.quantity)
    }

    this.uploader.onAfterAddingFile = (file) => { this.previewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file))) }
    this.uploader.onCompleteItem = (item: any, response: any, status: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
      this.reloadImg()
    };
    this.uploaderUpdate.onAfterAddingFile = (file) => { this.previewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file._file))) }
    this.uploaderUpdate.onCompleteItem = (item: any, response: any, status: any) => {
      this.reloadImg()
    }

    console.log(this.resItem.value.name);
    this.name = this.resItem.value.name
    this.file = null
    this.file = await this._rs.dwnImgfb(this.resItem.value.name)
  }
  async reloadImg() {
    this.file = null;
    this.previewPath = null;
    this.file = await this._rs.dwnImgfb(this.resItem.value.name);

  }
  async updateRes() {
    this.fval = this.resItem.value;
    this.updateValue = await this._rs.updateResto(this.fval.name, this.fval.quantity);
    this._rs.callMethod()
  }

  async download() {
    var dwn = await this._rs.dwnldResto(this.resItem.value.name);
    this.ngOnInit();
  }
  async deleteFile() {
    console.log(this.resItem.value.name);
    var dlt = await this._rs.deleteImgfb(this.resItem.value.name);
    this.ngOnInit()
  }
}
