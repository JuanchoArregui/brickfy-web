import { SessionService } from './../../shared/services/session.service';
import { print } from 'util';
import { Participant } from './../../shared/model/participant.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  participant: Participant = new Participant();
  apiError: string;

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit() { }

  onSubmitLogin(loginForm) {
    console.log('Este es el participante que entra en onSubmitLogin ');
    console.log(this.participant);
    this.sessionService.authenticate(this.participant).subscribe(
      (participant) => {
        loginForm.reset();
        this.router.navigate([`/participants/${participant.id}`]);
      },
      (error) => {
        console.log('Este es el error de onSubmitLogin ');
        this.apiError = error.message;
      }
    );
  }
}
