import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private fb:FormBuilder,private ds:DataService){
  }
  searchForm=this.fb.group(
    {
      from:[''],
      to:['']
    }
  )
  currentUser=localStorage.getItem("currentUser");
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
        }
        else
        {
          alert("Bus Not Found")
        }
      },
      result=>{
        console.log(result.error);
        alert(result.error.message)
      });
    
  }
}
