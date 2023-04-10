import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(private ds:DataService){}

  busNo:any;
  deleteBus(){
    this.ds.deleteBus(this.busNo).subscribe((result:any)=>
    {
      console.log("LINE 32 of addCom..");
      alert(result.message)
    },
    result=>{
      alert(result.error.message);
      // console.log("LINE 37 CATCH");
    })
  }
}
