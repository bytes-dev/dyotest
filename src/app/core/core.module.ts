import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsService, BranchsService } from './http-service';
import { ConstantService, LocalStorageService } from './services';

const HTTP_SERVICES = [
  CommitsService,
  BranchsService
];

const SERVICES = [
  ConstantService,
  LocalStorageService,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ...HTTP_SERVICES,
    ...SERVICES
  ]
})
export class CoreModule { }
