import { Routes } from '@angular/router';
import { MainComponent } from './components/core/main/main.component';
import { ChildComponent } from './components/features/input-output/child/child.component';
import { ParentComponent } from './components/features/input-output/parent/parent.component';
import { UnicastComponent } from './components/features/unicast/unicast.component';
import { MulticastComponent } from './components/features/multicast/multicast.component';
import { ProvaComponent } from './components/features/prova/prova.component';

export const routes: Routes = [
    {path:'', component:MainComponent , pathMatch:'full'}, 
    {path:'main', component:MainComponent },
    {path:'parent', component:ParentComponent },
    {path:'child', component:ChildComponent },

    {path:'unicast', component:UnicastComponent },
    {path:'multicast', component:MulticastComponent },
    {path:'prova', component:ProvaComponent },


];
