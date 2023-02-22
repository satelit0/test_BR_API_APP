import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ICandidate } from '../candidates/candidates.interface';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  private url_base = environment.base_url;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getConadidates(): Observable<ICandidate[]> {

    return this.httpClient.get<ICandidate[]>(`${this.url_base}/candidates`);

  }

  getCandidateById(id: number): Observable<ICandidate> {
    return this.httpClient.get<ICandidate>(`${this.url_base}/candidates/${id}`);
  }

  addCandidate(candidate: ICandidate) {
    console.log('ok, work');
    
    return this.httpClient.post<ICandidate>(`${this.url_base}/candidates`, {...candidate});
  }

  updateCandidate(id: number, candidate: ICandidate) {
    const params = new HttpParams().set('id', id)
    return this.httpClient.patch<any>(`${this.url_base}/candidates/${id}`, candidate );
  }

  deleteCandidate(id: number, soft: boolean) {
    const params = new HttpParams().set('soft', soft);
    return this.httpClient.delete(`${this.url_base}/candidates/${id}?soft=${soft}`);
  }

}
