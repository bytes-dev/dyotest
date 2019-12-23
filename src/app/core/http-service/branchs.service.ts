import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchsService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(organisationData) {
    const params = new HttpParams()
    .set('page', '1')
    .set('per_page', '100')
    return this.http.get(`${environment.GITHUB_API_URL}/${organisationData.organisation}/${organisationData.repository}/branches`, {params})
  }
}
