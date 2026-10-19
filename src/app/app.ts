import { Component, linkedSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfDirective } from './directives/Structural-Directives/if-directive/if-directive';
import { DataBinding } from './data-binding/data-binding';
import { ForDirective } from './directives/Structural-Directives/for-directive/for-directive';
import { SwitchDirective } from './directives/Structural-Directives/switch-directive/switch-directive';
import { NgClassDirective } from './directives/Attribute-Directives/ng-class-directive/ng-class-directive';
import { NgStyleDirective } from './directives/Attribute-Directives/ng-style-directive/ng-style-directive';
import { Signals } from './signals/signals';
import { LinkedSignals } from './signals/linked-signals/linked-signals';


@Component({
  imports: [
    RouterOutlet, 
    // IfDirective , 
    // DataBinding, 
    // ForDirective,
    // SwitchDirective,
    // NgClassDirective,
    // NgStyleDirective,
    Signals,
    LinkedSignals
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-hands-on-journey');
}
