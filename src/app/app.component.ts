import { Participant } from './shared/model/participant.model';
import { SessionService } from './shared/services/session.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private sessionService: SessionService) {}
}
