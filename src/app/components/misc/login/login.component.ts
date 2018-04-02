import { SessionService } from './../../../shared/services/session.service';
import { print } from 'util';
import { Participant } from './../../../shared/model/participant.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Participant = new Participant();
  apiError: string;
  

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit() { }

  onSubmitLogin(loginForm) {
    console.log(this.user);
    this.sessionService.authenticate(this.user).subscribe(
      (user) => {
        loginForm.reset();
        this.router.navigate(['/assets']);
      },
      (error) => {
        console.log("hola caracola");
        this.apiError = error.message;
      }
    );
  }
}
