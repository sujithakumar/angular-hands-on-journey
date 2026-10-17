import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-switch-directive',
  styleUrl: './switch-directive.scss',
  templateUrl: './switch-directive.html',
})
export class SwitchDirective {
  grades: number = 0;

  setGrade(inp: number) {
    this.grades = inp;
  }
}

