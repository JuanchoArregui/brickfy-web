import { Observable, Subscription } from 'rxjs/Rx';
import { Participant } from './../../shared/model/participant.model';
import { SessionService } from './../../shared/services/session.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  participant: Participant;
  participantSubscription: Subscription;

  constructor(
    private router: Router,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.participant = this.sessionService.getParticipant();
    this.participantSubscription = this.sessionService.onParticipantChanges()
      .subscribe(participant => this.participant = participant);
  }

  ngOnDestroy() {
    this.participantSubscription.unsubscribe();
  }

  onClickLogout() {
    this.sessionService.logout()
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

}
