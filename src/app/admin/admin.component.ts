import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  profilePicture:any = "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
  adminData:any={}

  constructor(private api:ApiService, private toastr:ToastrService, private router:Router){}

  ngOnInit(): void {
    this.api.getAdmin().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.adminData=res
        if(res.profile){
          this.profilePicture=res.profile
        }
      }
    })
  }

  handleupdate(){
    console.log(this.adminData)
    this.api.updateAdmin(this.adminData).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.toastr.success('Profile Updated')
        this.router.navigateByUrl('')
      },
      error:(err:any)=>{
        console.log(err)
        this.toastr.error('Something went wrong')
      }
    })
  }

  getFile(e:any){
    const file=e.target.files[0]
    const fr = new  FileReader()
    fr.readAsDataURL(file)
    fr.onload=(event:any)=>{
      console.log(event.target.result)
      this.adminData.profile=event.target.result
      this.profilePicture=event.target.result
    }
  }

  status:boolean = false

  editButton(){
    this.status=true
  }
  cancelButton(){
    this.status=false
  }
}
