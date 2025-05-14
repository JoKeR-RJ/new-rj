import { Routes } from '@angular/router';
import { UnoComponent } from './feature/components/a-uno/uno.component';
import { QuattroComponent } from './feature/components/d-quattro/quattro.component';
import { DueComponent } from './feature/components/b-due/due.component';
import { TreComponent } from './feature/components/c-tre/tre.component';

export const routes: Routes = [
    {path:'',redirectTo:'a-uno', pathMatch:'full'},

    {path:'a-uno',component:UnoComponent},
    {path:'b-due',component:DueComponent},
    {path:'c-tre',component:TreComponent},
    {path:'d-quattro',component:QuattroComponent},

    //{path:'**',component:}
];
