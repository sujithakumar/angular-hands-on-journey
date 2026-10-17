import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [
    CommonModule,
    FormsModule
  ],
  selector: 'app-if-directive',
  styleUrl: './if-directive.scss',
  templateUrl: './if-directive.html',
})
export class IfDirective {

  isChecked = false;
  showORhide: boolean = true;
  inp1: string = '';
  inp2: string = '';


  checked() {
    this.isChecked = !this.isChecked;
  }

  showText() {
    this.showORhide = true;
  }

  hideText() {
    this.showORhide = false;
  }


}
