import { Component, OnInit } from '@angular/core';
import { RestoserviceService } from '../restoservice.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-ng2',
  templateUrl: './ng2.component.html',
  styleUrls: ['./ng2.component.scss']
})
export class Ng2Component implements OnInit {
  
  data:any
  collection:any
  newRes: any
  constructor(private _resto: RestoserviceService, public dialog:MatDialog) { }
  
  async ngOnInit(){
      this.collection=await this._resto.readResto();
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
