import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { CounterService } from '../counter.service';
import { Counter } from '../counter';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public counterList : Array<Counter> = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService, private counterService: CounterService) { }

  ngOnInit() {
    this.counterList = this.counterService.getCounterList();
  }
}
