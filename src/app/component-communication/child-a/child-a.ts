import { Component, input, model, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child-a',
  styleUrl: './child-a.scss',
  templateUrl: './child-a.html',
})
export class ChildA {

  messageFromParent = input<string>('');
  parentname = input.required<string>();

  respondtoParent = output<string>();
  communicate() {
    this.respondtoParent.emit("Hello From Child A")
  }

  countFromParent = model(2);

}
