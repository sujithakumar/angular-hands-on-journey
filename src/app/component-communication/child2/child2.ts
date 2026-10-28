import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child2',
  styleUrl: './child2.scss',
  templateUrl: './child2.html',
})
export class Child2 {
  @Input() child1Data :string ="";

  
}
