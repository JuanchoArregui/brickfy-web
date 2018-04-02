import { ParticipantsService } from './../../shared/services/participants.service';
import { Router } from '@angular/router';
import { Participant } from './../../shared/model/participant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  participant: Participant = new Participant();
  apiError: string;

  constructor(
    private router: Router,
    private participantsService: ParticipantsService
  ) {}

  onSubmitSignup(signupForm) {
    this.participantsService.create(this.participant).subscribe(
      (user) => {
        signupForm.reset();
        this.router.navigate(['/login']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

}
