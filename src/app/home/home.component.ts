import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private fb:FormBuilder,private route:Router,private ds:DataService){

  }
  guestForm=this.fb.group(
    {
      name:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      email:['',[Validators.required,Validators.email]]
    }
  )

  adminForm=this.fb.group(
    {
      email:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required]]
    }
  );

  
  guestLogin()
  {
    if(this.guestForm.valid)
    {
      this.ds.currentUser=this.guestForm.value.name;
      localStorage.setItem("currentUser",this.ds.currentUser)
      this.route.navigateByUrl('search');
    }
    else
    {
      alert("Please fill all the fields")
    }
  }
  adminLogin()
  {
    
    if(this.adminForm.valid)
    {
      if(this.adminForm.value.email=="admin@bookbus.com" && this.adminForm.value.pwd=="123")
        this.route.navigateByUrl('adminpanel')
      else
        alert("Invalid Credentials")
    }
    else
    {
      alert("Please fill all the fields")
    }
  }
}

