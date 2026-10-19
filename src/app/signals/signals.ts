import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signals',
  styleUrl: './signals.scss',
  templateUrl: './signals.html',
  //changeDetection: ChangeDetectionStrategy.OnPush //disable change detection
})
export class Signals {

  numberSignal = signal(0);
  arraySignal = signal([]);
  arraySignal2 = signal([1, 5, 7, 9]);
  objectSignal = signal({});
  objSignal = signal({
    name: 'cat'
  });

  count = signal(2);
  doubleCount = computed(() => this.count() * 2);

  normalVariable: number = 0;

  userName = signal('Sujitha');

  constructor() {

    effect(() => {
      console.log("The call back value of number signal after increment", this.numberSignal())
    });

    // setTimeout(() => {
    //   this.normalVariable = 5000;
    // }, 3000);

    //this.numberSignal.set(5);

  }


  increment() {
    this.numberSignal.update(initialvalue => initialvalue + 1);
  }

  updateUserName(e: Event) {
    let value = e.target as HTMLInputElement
    this.userName.update(() => value.value);
  }


}
