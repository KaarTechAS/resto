import { Component, OnInit, Output, EventEmitter} from '@angular/core';
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
  @Output() event1 = new EventEmitter<any>()
  a: any
  collection: any
  updatedValue: any
  subsVar: any

  constructor(private _resto: RestoserviceService, public dialog: MatDialog) { }

  async ngOnInit() {
    this.collection = await this._resto.readResto();
    
    
    this._resto.obs$.subscribe(() => {
      this.reloadPage();
    })
    console.log(this.collection);
  }
  public generateArray(level: any): Array<any> {
    console.log(level)
    let stars: any[];
    stars = [1, 2, 3]
    return stars;
  }



  async reloadPage() {
    this.collection = await this._resto.readResto();
  }


  async yourMethod(name: any) {
    console.log("log", name);
    //this.a=await this.collection._resto.dwnImgfb(); 
  }
  name = 1
  public show: boolean = false
  toggle() {
    this.show = !this.show
  }
  log(name: any) {
    console.log(name);
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
      width: '700px', height: '1000px'
    }
  }
  async delete(name: any) {
    this.updatedValue = await this._resto.deleteResto(name)
    this.reloadPage();
  }
}