import { ConstantService } from './constant.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  organisations: any = [];
  key: string;
  constructor(
    private constantService: ConstantService
  ) {
    this.key = this.constantService.getLocalStorageKey();
  }
  setDefault() {
    const defaultData = {
      organisation: 'angular',
      repository: 'angular'
    };
    this.set(defaultData);
  }

  get() {
    this.organisations = JSON.parse(localStorage.getItem(this.key));
  }

  set(data) {
    this.organisations.push(data);
    localStorage.setItem(this.key, JSON.stringify(this.organisations));
  }

  getLastOrganisation (){
    this.get();
    return this.organisations.pop();
  }
}
