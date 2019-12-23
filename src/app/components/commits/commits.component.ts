import { LocalStorageService } from './../../core/services/local-storage.service';
import { CommitsService } from './../../core/http-service/commits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {
  filters = {
    page: 1,
    per_page: 100
  }
  commits: any = [];
  organisationData = {
    organisation: '',
    repository: ''
  }

  constructor(
    private commitsService: CommitsService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.organisationData = this.localStorageService.getLastOrganisation();
    this.getCommits(false);
  }

  getCommits(isLocalStorageNeedUpdate) {
    this.commitsService.getAll(this.filters, this.organisationData).subscribe((data) =>{
      this.commits = data;
      if (isLocalStorageNeedUpdate) {
        this.localStorageService.set(this.organisationData);
      }
    })
  }

}
