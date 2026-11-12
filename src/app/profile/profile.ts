import { Component, inject } from '@angular/core';
import { USER } from '../HelperFiles/interfaces';
import { UserService } from '../Services/user-service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-profile',
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})
export class Profile {

  user: any ;
  employee: any;

  // constructor(private service: UserService){
  //   this.user = service.getUser();
  // }
  service1 = inject(UserService);
  constructor(){
    this.getUsers();
  }
  getUsers(){
    this.user =this.service1.getUser();
  }

  ngOnInit(): void {
   
    this.getUSERFromServer()
  }

  getUSERFromServer(){
    this.service1.getUserFromServer().subscribe(data=>{
      this.employee = data;
    })
  }

}
