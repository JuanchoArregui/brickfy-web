import { BaseApiService } from './base-api.service';
import { Participant } from './../model/participant.model';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ParticipantsService extends BaseApiService {
  private static readonly PARTICIPANT_API = `${BaseApiService.BASE_API}/participants`;

  constructor(private http: Http) {
    super();
  }

  create(participant: Participant): Observable<Participant> {
    return this.http.post(ParticipantsService.PARTICIPANT_API, JSON.stringify(participant), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }


  list(): Observable<Array<Participant>> {
    return this.http.get(ParticipantsService.PARTICIPANT_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }


  edit(participant: Participant): Observable<Participant> {
    return this.http.put(`AssetsService.PARTICIPANT_API/${participant.id}`, participant.asFormData(),
    new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
