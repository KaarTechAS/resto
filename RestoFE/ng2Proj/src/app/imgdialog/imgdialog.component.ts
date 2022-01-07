import { Component, OnInit , Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoserviceService } from '../restoservice.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DomSanitizer} from '@angular/platform-browser';
import { FileUploader, Headers } from 'ng2-file-upload';

@Component({
  selector: 'app-imgdialog',
  templateUrl: './imgdialog.component.html',
  styleUrls: ['./imgdialog.component.scss']
})
export class ImgdialogComponent implements OnInit {
  fval:any
  updateValue:any
  dat:any=null
  constructor(private _rs : RestoserviceService) { }
  resItem = new FormGroup({
    name : new FormControl(),
    type : new FormControl(),
    quantity : new FormControl()
  })
  async ngOnInit(){
   
  }

  async createRes(){
    this.fval=this.resItem.value;
    this.updateValue= await this._rs.createResto(this.fval.name, this.fval.type, this.fval.quantity)

  }
}



