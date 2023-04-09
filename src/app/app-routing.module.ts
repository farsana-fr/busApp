import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"search",component:SearchComponent},
  {path:"adminpanel",component:AdminpanelComponent},
  {path:"addBus",component:AddComponent},
  {path:"view",component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
