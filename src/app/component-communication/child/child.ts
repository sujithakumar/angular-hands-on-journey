import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.scss',
  templateUrl: './child.html',
})
export class Child {

  @Input() inputFromParent : string = "";
  @Input() ngmodelFromParent: string = "";


  @Output() childOutput = new EventEmitter<string>();

  sendData(){
    this.childOutput.emit("Hi from child");
  }

}
