<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
=======
import { Component } from '@angular/core';
import { CounterService } from './counter.service';
>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.localAuthSetup();
    this.auth.handleAuthCallback();
  }

}
=======
export class AppComponent {
  title = 'counters';
}
>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d
