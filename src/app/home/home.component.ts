import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
<<<<<<< HEAD
import { Counter } from '../counter';
=======
>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  public counterList : Array<Counter> = [];

  constructor(private counterService: CounterService) {}

  reset(){
  }

  ngOnInit() {
    this.counterList = this.counterService.getCounterList();
  }

=======

  constructor( private counterService: CounterService ) { }

  ngOnInit() {
  }

  reset() {
    this.counterService.reset()
  }
>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d
}
