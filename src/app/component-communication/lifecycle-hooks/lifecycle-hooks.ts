import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, afterNextRender, afterEveryRender } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-lifecycle-hooks',
  styleUrl: './lifecycle-hooks.scss',
  templateUrl: './lifecycle-hooks.html',
})
export class LifecycleHooks implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  dummyVariable: string = '';

  constructor() {
    //initialize data 
    this.dummyVariable = "Hello From Compnent";
    console.log("constructor is called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    //executes when theres a change / data  
    // passed to the component via @input 
    console.log('1. On Changes');

    // 1. Runs ONCE after the very next render completes
    afterNextRender(() => {
      console.log('Next render completed. Perfect for initializing third-party libraries or measuring the DOM.');
    });

    // 2. Runs AFTER EVERY time the application/component finishes rendering
    afterEveryRender(() => {
      console.log('Application render completed.');
    });
  }

  ngOnInit(): void {
    console.log("2. on Init");
  }

  ngDoCheck(): void {
    console.log('3. on DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('4. on AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('5. on AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('6. on AfterViewInit');

  }

  ngAfterViewChecked(): void {
    console.log('7. on AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('8. on Destroy');
  }



}
