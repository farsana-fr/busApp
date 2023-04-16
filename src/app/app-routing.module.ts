import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { BookComponent } from './book/book.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"search",component:SearchComponent},
  {path:"adminpanel",component:AdminpanelComponent},
  {path:"addBus",component:AddComponent},
  {path:"updateBus",component:UpdateComponent},
  {path:"delete",component:DeleteComponent},
  {path:"book",component:BookComponent},
  {path:"myTicket",component:ViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
