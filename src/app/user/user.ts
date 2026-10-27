import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.scss',
  templateUrl: './user.html',
})
export class User {

  constructor(private route: Router) {

  }


  login() {
    //login authentication code 
    this.route.navigateByUrl('/binding');
    this.route.navigate(['/signal'])
  }


}
