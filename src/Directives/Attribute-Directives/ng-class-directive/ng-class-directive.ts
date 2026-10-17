import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule,FormsModule],
  selector: 'app-ng-class-directive',
  styleUrl: './ng-class-directive.scss',
  templateUrl: './ng-class-directive.html',
})
export class NgClassDirective {

  textColor: string = 'text-success';
  buttonColor: string = 'text-primary';
  isChecked: boolean = false;
  selectedValue: string ='';

  changeOnButtonClick(inp: string) {
    this.buttonColor = `text-${inp}`;
  }

  clear() {
    this.buttonColor = '';
  }

}
