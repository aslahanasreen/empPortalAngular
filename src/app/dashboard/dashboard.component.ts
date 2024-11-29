import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AdminComponent } from '../admin/admin.component';
import { CalenderComponent } from '../calender/calender.component';
import { ChartsComponent } from '../charts/charts.component';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent,AdminComponent,CalenderComponent,ChartsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  empCount:any=0

  constructor( private api:ApiService ){

  }
  
  ngOnInit(): void {
    this.api.getEmployee().subscribe({
      next:(res:any)=>{
        this.empCount=res.length
      }
    })
  }
}
