import { BaseApiService } from './base-api.service';
import { Participant } from './../model/participant.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

const CURRENT_PARTICIPANT_KEY = 'currentParticipant';

@Injectable()
export class SessionService extends BaseApiService {
  private static readonly SESSION_API = `${BaseApiService.BASE_API}/session`;

  private participant: Participant;
  private participantSubject: Subject<Participant> = new Subject();

  constructor(private http: Http) {
    super();
    this.participant = JSON.parse(localStorage.getItem(CURRENT_PARTICIPANT_KEY));
    this.notifyParticipantChanges();
  }

  authenticate(participant: Participant): Observable<Participant> {
    
    return this.http.post(SessionService.SESSION_API, JSON.stringify(participant), BaseApiService.defaultOptions)
      .map(res => {
        return this.doAuthentication(participant); //res.json()   ??????????????????????????????????????????????????
      })
      .catch(error => this.handleError(error));
  }

  logout(): Observable<void> {
    return this.http.delete(SessionService.SESSION_API, BaseApiService.defaultOptions)
      .map(res => {
        return this.doLogout();
      })
      .catch(error => this.handleError(error));
  }

  isAuthenticated(): boolean {
    return this.participant ? true : false;
  }

  getParticipant(): Participant {
    return this.participant;
  }

  onParticipantChanges(): Observable<Participant> {
    return this.participantSubject.asObservable();
  }

  private doAuthentication(participant: Participant): Participant {
    this.participant = participant;
    localStorage.setItem(CURRENT_PARTICIPANT_KEY, JSON.stringify(this.participant));
    this.notifyParticipantChanges();
    return this.participant;
  }

  protected doLogout(): void {
    this.participant = null;
    localStorage.removeItem(CURRENT_PARTICIPANT_KEY);
    this.notifyParticipantChanges();
  }

  private notifyParticipantChanges() {
    this.participantSubject.next(this.participant);
  }

}

