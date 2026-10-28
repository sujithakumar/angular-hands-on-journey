import { Component } from '@angular/core';
import { Child } from '../child/child';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Child2 } from '../child2/child2';

@Component({
  imports: [Child, CommonModule, FormsModule, Child2],
  selector: 'app-parent',
  styleUrl: './parent.scss',
  templateUrl: './parent.html',
})
export class Parent {

  parentString :string = "Hello From Parent";
  liveChanges: string = '';


  dataFromChild :string ='';

  receiveData(data: string){
    this.dataFromChild = data;
  }

}
