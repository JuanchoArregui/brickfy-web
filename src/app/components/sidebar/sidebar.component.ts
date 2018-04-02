import { Observable, Subscription } from 'rxjs/Rx';
import { Participant } from './../../shared/model/participant.model';
import { SessionService } from './../../shared/services/session.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
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
