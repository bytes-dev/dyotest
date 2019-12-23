import { LocalStorageService } from './../../core/services/local-storage.service';
import { CommitsService } from './../../core/http-service/commits.service';
import { Component, OnInit } from '@angular/core';
import { BranchsService } from 'src/app/core/http-service';
import * as _ from 'lodash';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {
  Utils = {
    keys: Object.keys,
  };
  isLoaded = false;
  filters = {
    page: 1,
    per_page: 100,
    sha: '',
  }
  commits: any = [];
  branches: any = [];
  groupCommits: any;
  organisationData = {
    organisation: '',
    repository: ''
  }
  isError: boolean;

  constructor(
    private commitsService: CommitsService,
    private localStorageService: LocalStorageService,
    private branchsService: BranchsService
  ) { }

  ngOnInit() {
    this.organisationData = this.localStorageService.getLastOrganisation();
    this.getBranches(false);
  }

  getCommits(isLocalStorageNeedUpdate) {
    this.isLoaded = true;
    this.commitsService.getAll(this.filters, this.organisationData).subscribe((data) =>{
      this.isLoaded = false;
      this.commits = data;
      this.commits.forEach(commit => {
        commit.groupDate = (commit.commit.committer.date || '').split("T")[0]
      });
      this.groupCommits = _.groupBy(this.commits, 'groupDate');
      if (isLocalStorageNeedUpdate) {
        this.localStorageService.set(this.organisationData);
      }
    }, (error) => {
      this.isLoaded = false;
    })
  }

  getBranches(isLocalStorageNeedUpdate) {
    this.isLoaded = true;
    this.branchsService.getAll(this.organisationData).subscribe((data) =>{
      this.branches = data;
      const masterBranchData = this.branches.find((branch) => branch.name === 'master');
      this.filters.sha = masterBranchData.commit.sha;
      this.getCommits(isLocalStorageNeedUpdate);
    }, (error) => {
      this.commits = [];
      this.branches = [];
      this.isLoaded = false;
      this.isError = true;
    })
  }

}
