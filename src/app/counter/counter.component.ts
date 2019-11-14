import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
<<<<<<< HEAD
import { Counter } from '../counter';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
=======
import { Observable } from 'rxjs';
import { Counter } from '../counter';
>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
<<<<<<< HEAD
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
=======

export class CounterComponent implements OnInit {
  title = "Counter"
  @Input() position :number;
  value: Counter;
  constructor( public counterService: CounterService ) { }

  ngOnInit() {

    this.counterService.getCounterValue(this.position).subscribe(counter => this.value= counter);
  }

  increment() {
   /* this.counterService.increment(this.position); */
 
    this.counterService.increment().subscribe(counter => this.value = counter);
  }

}
>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d
