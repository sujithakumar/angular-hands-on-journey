import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from '../data-binding/data-binding';
import { IfDirective } from '../Directives/Structural-Directives/if-directive/if-directive';
import { ForDirective } from '../Directives/Structural-Directives/for-directive/for-directive';
import { SwitchDirective } from '../Directives/Structural-Directives/switch-directive/switch-directive';
import { NgClassDirective } from '../Directives/Attribute-Directives/ng-class-directive/ng-class-directive';
import { NgStyleDirective } from '../Directives/Attribute-Directives/ng-style-directive/ng-style-directive';

@Component({
  imports: [RouterOutlet, 
    // IfDirective , 
    // DataBinding, 
    // ForDirective,
    // SwitchDirective,
    // NgClassDirective
    NgStyleDirective
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-hands-on-journey');
}
