import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from '../data-binding/data-binding';
import { IfDirective } from '../Directives/Structural-Directives/if-directive/if-directive';

@Component({
  imports: [RouterOutlet, IfDirective , DataBinding],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-hands-on-journey');
}
