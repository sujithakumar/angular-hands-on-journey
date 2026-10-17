import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-for-directive',
  styleUrl: './for-directive.scss',
  templateUrl: './for-directive.html',
})
export class ForDirective {

  companies: string[] = ['Apple', 'Samsung', "Pixel", 'Nokia'];
  employee: any[] =
    [
      { name: "Sujitha", age: 30, email: "xyz@123.com", position: "developer" },
      { name: "Asha", age: 40, email: "ashz@123.com", position: "Manager" },
      { name: "Muthu", age: 29, email: "nuyyz@123.com", position: "tester" },
      { name: "Megha", age: 59, email: "nuyyz@123.com", position: "developer" },
      { name: "Mathi", age: 39, email: "nuyyz@123.com", position: "tester" },
      { name: "Rathi", age: 39, email: "nuyyz@123.com", position: "developer" },
     { name: "Asha", age: 40, email: "ashz@123.com", position: "Product Manager" },

    ]
}
