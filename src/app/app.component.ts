import { Observable, Subscription } from 'rxjs/Rx';
import { Participant } from './shared/model/participant.model';
import { SessionService } from './shared/services/session.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  participant: Participant;
  participantSubscription: Subscription;

  constructor(
   // private router: Router,
    private sessionService: SessionService) {}


  ngOnInit() {
    console.log('se activa ngOnInit');
    console.log(this);
    console.log(this.participant);
    this.participant = this.sessionService.getParticipant();
    this.participantSubscription = this.sessionService.onParticipantChanges()
      .subscribe(participant => this.participant = participant);
  }

  ngOnDestroy() {
    this.participantSubscription.unsubscribe();
  }

}
