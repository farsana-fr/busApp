import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private fb:FormBuilder,private ds:DataService,private route:Router){
  }
  searchForm=this.fb.group(
    {
      from:[''],
      to:['']
    }
  )
  uName=localStorage.getItem("uName");
  email=localStorage.getItem("email");
  // result:any
  busNo:any
  regNo:any
  from:any
  to:any
  dTime:any
  errorNF:any
  

  
  search()
  {
    
    let from:any=this.searchForm.value.from;
    let to:any=this.searchForm.value.to;
    this.ds.search(from,to).subscribe((result:any)=>
      {
        console.log(result);
        if(result.status)
        {
          this.busNo=result.message.busNo
      this.regNo=result.message.regNo
      this.from=result.message.from
      this.to=result.message.to
      this.dTime=result.message.departureTime
      localStorage.setItem("busNo",this.busNo);
        }
        else
        {
          alert("Bus Not Found")
          this.busNo=this.regNo=this.from=this.to=this.dTime='';

        }
      },
      result=>{
        this.busNo=this.regNo=this.from=this.to=this.dTime='';
        console.log(result.error);
        alert(result.error.message)
      });
    
  }

  book()
  {
    // 
    this.ds.bookBus(this.busNo,this.regNo,this.from,this.to,this.dTime,this.email,this.uName).subscribe((result:any)=>{
      if(result.status)
      {
        this.busNo=result.message.ticket.busNo
    this.regNo=result.message.regNo
    this.from=result.message.from
    this.to=result.message.to
    this.dTime=result.message.departureTime
    localStorage.setItem("busNo",this.busNo);
      }
    })
    alert("Booked")
    // this.route.navigateByUrl('book')
    // this.ds.book(this.busNo,this.regNo,this.from,this.to,this.dTime,this.email,this.uName).subscribe((result:any)=>{
   
  }

  logout()
  {
    localStorage.removeItem("uName")
    localStorage.removeItem("email")
    localStorage.removeItem("busNo")
    this.route.navigateByUrl('')
  }
}
