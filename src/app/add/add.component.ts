import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private fb: FormBuilder, private ds: DataService) {}

  addForm = this.fb.group({
    busNo: ['', [Validators.required]],
    regNo: ['', [Validators.required]],
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
    dTime: ['', [Validators.required]],
  });

  addBus() {
    if (this.addForm.valid) {
      var busNo = this.addForm.value.busNo;
      var regNo = this.addForm.value.regNo;
      var from = this.addForm.value.from;
      var to = this.addForm.value.to;
      var dTime = this.addForm.value.dTime;

      // const result = this.ds.addBus(busNo, regNo, from, to, dTime);
      this.ds.addBus(busNo, regNo, from, to, dTime).subscribe((result:any)=>
      {
        console.log("LINE 32 of addCom..");
        alert(result.message)
      },
      result=>{
        alert(result);
        console.log("LINE 37 CATCH");
      })
      
      this.addForm.reset();
    } else {
      alert('Please fill all the fields');
    }
  }
}
