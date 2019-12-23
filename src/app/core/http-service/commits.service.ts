import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(filters, organisationData) {
    const params = new HttpParams()
      .set('page', filters.page)
      .set('per_page', filters.per_page)
      .set('sha', filters.sha);
    return this.http.get(`${environment.GITHUB_API_URL}/${organisationData.organisation}/${organisationData.repository}/commits`, { params })
  }
}
