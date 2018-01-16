import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';



  himanshuSubs: Subscription;
  ashuObservable = Observable.create((anilObserver: Observer<number>)=>{
    anilObserver.next(1);
  
    anilObserver.complete();
    anilObserver.next(6);
  });


  ngOnInit() {
 

    this.himanshuSubs =  this.ashuObservable.subscribe(
    (mic) => {
      console.log( mic );
    },
    
    (error)=>{
      console.log('error');
    },


    ()=>{
      console.log('Completed');
    });



  }

  ngOnDestroy() {
    this.himanshuSubs.unsubscribe();
  }


}
