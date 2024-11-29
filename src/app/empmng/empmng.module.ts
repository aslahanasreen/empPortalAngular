import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { EmplistComponent } from './emplist/emplist.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf,NgFor } from '@angular/common';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

export const routes:Routes=[
  {path:'',component:EmplistComponent},
  {path:'add',component:AddempComponent},
  {path:'edit/:id',component:EditempComponent}
]

@NgModule({
  declarations: [
    AddempComponent,
    EditempComponent,
    EmplistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarComponent,
    RouterLink,
    FormsModule,
    NgIf,NgFor,
    SearchPipePipe,
    NgxPaginationModule
  ]
})
export class EmpmngModule { }
