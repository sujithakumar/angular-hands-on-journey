import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Reusable } from '../reusable/reusable';
import { CommonModule, JsonPipe } from '@angular/common';
import { USER } from '../../HelperFiles/interfaces';

@Component({
  imports: [Reusable,CommonModule],
  selector: 'app-child2',
  styleUrl: './child2.scss',
  templateUrl: './child2.html',
})
export class Child2 implements AfterViewInit {
  @Input() child1Data: string = "";

   parentString ="";
  userData!: USER;

  @ViewChild('reusable', {static:false}) reusable!: Reusable;

  ngAfterViewInit(): void {
    this.reusable.reusableProperty = "Parent String";
    this.userData = this.reusable.userData ;
  }

 

}
