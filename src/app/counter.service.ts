import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { Counter } from './counter';
=======
import {Counter} from './counter';
import {Observable} from 'rxjs';
>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d

@Injectable({
  providedIn: 'root'
})
export class CounterService {
<<<<<<< HEAD
  private countersUrl = "https://lp4asgadot.herokuapp.com/counters/";
  private countersUrlJson = "https://lp4asgadot.herokuapp.com/counters.json";
  private counterList : Array<Counter> = [];

  constructor(private httpClient: HttpClient ) {
  }

  reset() {
  }

  // distant increment
  increment(id : number){
    this.httpClient.patch<Counter>(this.countersUrl + id + ".json", {}).subscribe();
  }

  // gets json of a specific counter
  getCounter(id : number): Observable<Counter> {
    return this.httpClient.get<Counter>(this.countersUrl + id + ".json");
  }

  // returns an array containing every distant counter
  getCounterList(): Array<Counter> {
    this.setCounterList();
    return this.counterList;
  }

  setCounterList(){
    this.httpClient.get<Counter[]>(this.countersUrlJson)
      .subscribe((others) => {
        others.forEach((c) => {
          this.counterList.push(c);
        });
      }
    );
  }
}
=======
  public initiaValue = [12, 5, 18];

  constructor(private httpClient: HttpClient) { }

  reset() {
    this.initiaValue = [0, 0, 0];
  }

  /*increment(position: number): number {
    this.initialValue[position]++;
    return this.initialValue[position];
  } */

  increment(): Observable<Counter>{
    this.httpClient.patch("https://lp4asgadot.herokuapp.com/counters/49.json",{"value" : 1}).subscribe();
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/49.json");
  }

  getCounterValue(id: number): Observable<Counter> {
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/49.json");
  }
}

>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d
