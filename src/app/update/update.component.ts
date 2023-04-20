import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  busNo:any;
  key:any;
  value:any;
  
  constructor(private ds:DataService){

    
  }
  update()
  {
    let flag=false;
    console.log("INSIDE update TS",this.key);
    if((this.key)=="regNo")
    {
      
      this.ds.update(this.busNo,{"regNo":this.value}).subscribe((result:any)=>{
        console.log(result);
        flag=result.status;
      });
      console.log("REGNO");
    }
    if((this.key)=="from")
    {
      this.ds.update(this.busNo,{"from":this.value}).subscribe((result:any)=>{
        console.log(result);
        flag=result.status;
      })
      console.log("FROM");
    }
    if((this.key)=="to")
    {
      this.ds.update(this.busNo,{"to":this.value}).subscribe((result:any)=>{
        console.log(result);
        flag=result.status;
      })
      console.log("TO");
      
    }
    if((this.key)=="dTime")
    {
      this.ds.update(this.busNo,{"dTime":this.value}).subscribe((result:any)=>{
        console.log(result);
        flag=result.status;
        
      })
      console.log("DTIME");
    }
    if(flag)
    {
      alert("Updated")
    }
    
  }
}
