import { Component, input, model, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child-b',
  styleUrl: './child-b.scss',
  templateUrl: './child-b.html',
})
export class ChildB {
  messageFromParent = input<string>('');
  parentname = input.required<string>();

  respondtoParent = output<string>();
  communicate() {
    this.respondtoParent.emit("Hi From Child B")
  }

  countFromParent = model(4);
  increase() {
    this.countFromParent.update(x => x + 1);
  }

}
