import { SessionService } from './../../../shared/services/session.service';
import { ParticipantsService } from './../../../shared/services/participants.service';
import { Participant } from './../../../shared/model/participant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})

export class ParticipantListComponent implements OnInit {
  participants: Array<Participant> = [];

  constructor(private participantsService: ParticipantsService) { }

  ngOnInit() {
    this.participantsService.list()
      .subscribe((participants) => this.participants = participants);
  }

}
