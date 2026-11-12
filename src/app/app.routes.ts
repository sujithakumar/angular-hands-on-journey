import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { NoPage } from './no-page/no-page';
import { Signals } from './signals/signals';
import { NgStyleDirective } from './directives/Attribute-Directives/ng-style-directive/ng-style-directive';
import { SwitchDirective } from './directives/Structural-Directives/switch-directive/switch-directive';
import { User } from './user/user';
import { Parent } from './component-communication/parent/parent';
import { LifecycleHooks } from './component-communication/lifecycle-hooks/lifecycle-hooks';
import { Ang22 } from './component-communication/ang22/ang22';
import { Profile } from './profile/profile';
import { Employee } from './CRUD/employee/employee';
import { Create } from './CRUD/create/create';
import { Update } from './CRUD/update/update';
import { View } from './CRUD/view/view';

export const routes: Routes = [

    { path: '', component: User }, //usually home or loginpage

    { path: '', redirectTo: 'User', pathMatch: 'full' },


    { path: 'login', component: User },
    { path: 'binding', component: DataBinding },
    { path: 'signal', component: Signals },
    { path: 'NgStyle-directive', component: NgStyleDirective },
    { path: 'NgSwitch-Directive', component: SwitchDirective },
    { path: 'parent-child', component: Parent },
    { path: 'hooks', component: LifecycleHooks },
    { path: 'profile', component: Profile },
    { path: 'ang22', component: Ang22 },
    { path: 'crud', component: Employee },
    { path: 'create', component: Create },
    { path: 'update/:id', component: Update },
    { path: 'view/:id', component: View },
    { path: '**', component: NoPage }

];


