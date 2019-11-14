import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Counter } from './counter';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
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
