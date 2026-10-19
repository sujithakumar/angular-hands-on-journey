import { CommonModule } from '@angular/common';
import { Component, computed, signal, WritableSignal, effect, linkedSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-linked-signals',
  styleUrl: './linked-signals.scss',
  templateUrl: './linked-signals.html',
})
export class LinkedSignals {

  price = signal(100);

  quantity = linkedSignal<number, number>({
    source: this.price,
    computation: (newPrice, previous) => {
      return newPrice === previous?.source ? previous.value : 1;
    }
  });

  //quantity = linkedSignal(() => this.price() ? 1 : 1);

  total = computed(() => this.price() * this.quantity());
  
  changeProduct() {
    this.price.update(init => init + 100);
  }


}
