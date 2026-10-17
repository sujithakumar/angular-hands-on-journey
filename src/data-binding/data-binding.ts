import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding',
  styleUrl: './data-binding.scss',
  templateUrl: './data-binding.html',
})
export class DataBinding {
  name : string = "Angular";
  topic : string = "Data Binding";
  imageURL : string = "https://yt3.googleusercontent.com/_LW0kK30lQzZ5Q4PenCGxHYivcp91RnDo2_ouG8uRk6efXJrDPnhNMghuon9mEOsiqVrjUFBdA=s160-c-k-c0x00ffffff-no-rj";
  
  twoWay = "";

  save(){
    alert(`Data saved Successfully!`);
  }

  changeCountry(){
    alert("country changed");
  }
}
