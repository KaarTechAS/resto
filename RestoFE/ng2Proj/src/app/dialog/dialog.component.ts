import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoserviceService } from '../restoservice.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

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
  constructor(private _rs : RestoserviceService, @Inject(MAT_DIALOG_DATA) public dat:any) { }
  resItem = new FormGroup({
    name : new FormControl(),
    type : new FormControl(),
    quantity : new FormControl()
  })
  async ngOnInit(){
    if (this.dat==null){
      console.log('o')
    }
    else{
      this.resItem.controls["name"].patchValue(this.dat.name);
    this.resItem.controls["type"].patchValue(this.dat.type)
    this.resItem.controls["quantity"].patchValue(this.dat.quantity)
    }
  }
  
  async updateRes(){
    this.fval=this.resItem.value
    console.log(this.fval.name);
    
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
}
