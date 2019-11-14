import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
<<<<<<< HEAD
import { AuthService } from '../auth.service';
import { CounterService } from '../counter.service';
import { Counter } from '../counter';
import {MatExpansionModule} from '@angular/material/expansion';

=======
import { CounterService } from '../counter.service';
>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
<<<<<<< HEAD
  public counterList : Array<Counter> = [];
=======
>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

<<<<<<< HEAD
  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService, private counterService: CounterService) { }

  ngOnInit() {
    this.counterList = this.counterService.getCounterList();
  }
}
=======
  constructor(private breakpointObserver: BreakpointObserver, private counterService: CounterService) {}

  reset() {
    this.counterService.reset()
  }
}
>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d
