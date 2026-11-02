import { Component, signal } from '@angular/core';
import { ChildA } from '../child-a/child-a';
import { ChildB } from '../child-b/child-b';

@Component({
  imports: [ChildA, ChildB],
  selector: 'app-ang22',
  styleUrl: './ang22.scss',
  templateUrl: './ang22.html',
})
export class Ang22 {
  passToChildren: string = "hey!";
  username: string = "Sujitha";
  messageFromChild: string = "";

  count = signal(1);

  readFromChild(data: string) {
    this.messageFromChild = data;
  }
}
