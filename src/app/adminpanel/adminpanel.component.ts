import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {
  constructor(private ds:DataService,private router:Router){}

  

  addBus()
  {
    this.router.navigateByUrl('addBus')
  }
  deleteBus()
  {
    this.router.navigateByUrl('delete')
  }
  updateBus()
  {
    // this.ds.buses=this.ds.busDetails;
    this.router.navigateByUrl('updateBus')
  }
}
