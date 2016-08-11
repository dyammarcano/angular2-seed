import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'home',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class Home implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit():any {
    console.info('Init Home Component');
  }

  ngOnDestroy():any {
    console.info('Destroy Home Component');
  }
}
