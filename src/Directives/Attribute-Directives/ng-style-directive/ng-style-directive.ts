import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-ng-style-directive',
  styleUrl: './ng-style-directive.scss',
  templateUrl: './ng-style-directive.html',
})
export class NgStyleDirective {

  updateColor: string = 'Navy';
  buttonColor : string = 'violet';
  isChecked: boolean = false;
  selectedValue :string = '';

  updateOnButtonClick(inp: string) {
    this.buttonColor = inp;
  }

  clear() {
    this.buttonColor = '';
  }

}
