import { Component, OnInit } from '@angular/core';
import { RestoserviceService } from '../restoservice.service';

@Component({
  selector: 'app-ng2',
  templateUrl: './ng2.component.html',
  styleUrls: ['./ng2.component.scss']
})
export class Ng2Component implements OnInit {
  data: any
  constructor(private _rs : RestoserviceService) { }

  ngOnInit():void{
    
  }
  async initfun(){
    this.data=await this._rs.fetchresto()
    console.log(this.data);
  }
}
