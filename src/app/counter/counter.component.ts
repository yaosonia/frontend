
import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Counter } from '../counter';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() id: number;

    the_counter: Counter;

  constructor(private counterService: CounterService,
              public  _router : Router,
              private activeRoute: ActivatedRoute) {

      var currentRout = window.location.href;
      if (currentRout.includes('/counter/')){
        this.activeRoute.params.subscribe(id => {
          this.updateRoutes();
          this.updateValue();
        });
      }
  }

  updateRoutes(){
    this.activeRoute.params.subscribe(routeParams => {
    	this.id = routeParams.id;
    });
  }

  ngOnInit() {
     this.updateValue();
  }


  increment(){
    this.counterService.increment(this.id);
    this.updateValue();
  }

  updateValue(){
    this.counterService.getCounter(this.id)
      .subscribe(counter =>
        this.the_counter = counter);
  }

}