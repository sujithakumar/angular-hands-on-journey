import { Component } from '@angular/core';
import { USER } from '../../HelperFiles/interfaces';

@Component({
  imports: [],
  selector: 'app-reusable',
  styleUrl: './reusable.scss',
  templateUrl: './reusable.html',
})
export class Reusable {
 
  reusableProperty: string = 'Reusable String';

  saveME() {
    alert("saved");
  }

  userData :USER = {
    name: "sujitha",
    age: 30,
    isMarried: false
  }
}
