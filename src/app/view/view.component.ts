import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private ds:DataService){
    this.ds.view
  }
  buses:any=Object.values(this.ds.busDetails);

}
