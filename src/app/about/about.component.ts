import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'about',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html'
})
export class About implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit():any {
    console.info('Init About Component');
  }

  ngOnDestroy():any {
    console.info('Destroy About Component');
  }
}
