import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { Counter } from '../counter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public counterList : Array<Counter> = [];

  constructor(private counterService: CounterService) {}

  reset(){
  }

  ngOnInit() {
    this.counterList = this.counterService.getCounterList();
  }

}
