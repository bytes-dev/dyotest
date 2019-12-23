import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommitsComponent } from './commits/commits.component';

const routes: Routes = [
  { path: 'commits', component: CommitsComponent },
  { path: '',
    redirectTo: '/commits',
    pathMatch: 'full'
  },
  { path: '**', component: CommitsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  CommitsComponent,
]
