import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { NoPage } from './no-page/no-page';
import { Signals } from './signals/signals';
import { NgStyleDirective } from './directives/Attribute-Directives/ng-style-directive/ng-style-directive';
import { SwitchDirective } from './directives/Structural-Directives/switch-directive/switch-directive';
import { User } from './user/user';

export const routes: Routes = [

    {path:'',component :User }, //usually home or loginpage

    { path: '', redirectTo: 'User', pathMatch: 'full' },


    { path: 'login', component: User },
    { path: 'binding', component: DataBinding },
    { path: 'signal', component: Signals },
    { path: 'NgStyle-directive', component: NgStyleDirective },
    { path: 'NgSwitch-Directive', component: SwitchDirective },
    { path: '**', component: NoPage }

];


