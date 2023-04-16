import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  busNo:any=localStorage.getItem("busNo");
  email=localStorage.getItem("email");
   uName=localStorage.getItem("uName");
  regNo:any
  from:any
  to:any
  dTime:any
  ticketDet:any
  constructor(private ds:DataService){
    this.ds.book(this.email).subscribe((result:any)=>{
      this.ticketDet=result.message.ticket;
      localStorage.setItem("ticket",result.message);

      console.log("LINE 21 result--",result.message.ticket);
      for(let i of result.message.ticket)
      {
        console.log(i);

      }
      if(result.status)
      {
        this.busNo=result.message.ticket.busNo
    this.regNo=result.message.regNo
    this.from=result.message.from
    this.to=result.message.to
    this.dTime=result.message.departureTime
    localStorage.setItem("busNo",this.busNo);
      }
    });
    
  }

 
  
}
