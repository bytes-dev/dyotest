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
    this.organisations = JSON.parse(localStorage.getItem(this.key)) || [];
  }

  set(data) {
    if (!this.checkForDuplicate(data)) {
      this.organisations.push(data);
      localStorage.setItem(this.key, JSON.stringify(this.organisations));
    }
  }

  getLastOrganisation (){
    this.get();
    return this.organisations.pop();
  }

  getDefault() {
    return {
      organisation: 'angular',
      repository: 'angular'
    };
  }

  checkForDuplicate(data) {
    this.get();
    const isExits = this.organisations.find((org) => {
      return (org.organisation === data.organisation && org.repository === data.repository);
    })
    return isExits;
  }
}
