import { Component, OnInit } from '@angular/core';
import { RestoserviceService } from '../restoservice.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ImgdialogComponent } from '../imgdialog/imgdialog.component';

@Component({
  selector: 'app-ng2',
  templateUrl: './ng2.component.html',
  styleUrls: ['./ng2.component.scss']
})

export class Ng2Component implements OnInit {
  public previewPath: any;
  name: any
  downasync: any
  postUrl = '/resto/updimg';
  updateValue: any
  readhit: any
  data: any
  collection: any
  newRes: any
  fileImg: any;
  reader: any
  con: any
  public currentname: any
  ready = false;
  thumb = "";


  constructor(private _resto: RestoserviceService, public dialog: MatDialog) {


  }

  async ngOnInit() {
    this.collection = await this._resto.readResto();
  }




  openDialog(name: any, type: any, quantity: any) {

    this.dialog.open(DialogComponent, {
      width: '700px', height: '1000px',
      data: {
        name,
        type,
        quantity
      }
    });
  }
  openDialogImg(name: any) {
    this.dialog.open(ImgdialogComponent, {
      width: '700px', height: '1000px',
      data: {
        name
      }
    });
  }
  openDialogNew() {
    this.dialog.open(ImgdialogComponent), {
      width: '100%', height: '100%'
    }
  }

  async delete(name: any) {
    this.updateValue = await this._resto.deleteResto(name)
    this.readhit = await this._resto.readResto()
  }



}



