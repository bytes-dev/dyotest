import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsService } from './http-service';

const HTTP_SERVICES = [
  CommitsService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ...HTTP_SERVICES,
  ]
})
export class CoreModule { }
