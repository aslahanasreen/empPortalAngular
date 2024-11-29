import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrl: './editemp.component.css'
})
export class EditempComponent {

  eid:any=""
  employee:any={
    id:"",name:"",phone:"",department:""
  }

  constructor( private ac:ActivatedRoute , private api:ApiService, private toastr:ToastrService, private router:Router){
    this.ac.params.subscribe({
      next:(res:any)=>{
        this.eid=res.id
        this.api.getEmp(this.eid).subscribe({
          next:(res:any)=>{
            console.log(res)
            this.employee=res
          },
          error:(err:any)=>{
            console.log(err)
          }
        })
      }
    })
  }

  handleEdit(){
    console.log(this.employee)

    this.api.editEmployee(this.employee.id,this.employee).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.toastr.success('Edited Successfully')
        this.router.navigateByUrl('/empmng')
      },
      error:(err:any)=>{
        console.log(err)
        this.toastr.error('Something Went Wrong')
      }
    })
  }

}
