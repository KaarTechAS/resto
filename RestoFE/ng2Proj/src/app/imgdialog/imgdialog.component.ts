import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgdialog',
  templateUrl: './imgdialog.component.html',
  styleUrls: ['./imgdialog.component.scss']
})
export class ImgdialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
file:string="https://storage.googleapis.com/download/storage/v1/b/resto-eca87.appspot.com/o/uploads%2Frestoimg%2Ftry.jpg?generation=1641275728157421&alt=media";
downloadFile=()=>{
  window.open()
}
}
