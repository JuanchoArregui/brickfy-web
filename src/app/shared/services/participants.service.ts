import { Observable } from 'rxjs/Rx';
import { Participant } from './../model/participant.model';
import { Http } from '@angular/http';
import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantsService extends BaseApiService {
  private static readonly base_API = `${BaseApiService.BASE_API}/participants`;

  constructor(private http: Http) {
    super();
  }

  create(participant: Participant): Observable<Participant> {
    return this.http.post(ParticipantsService.base_API, JSON.stringify(participant), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

}
