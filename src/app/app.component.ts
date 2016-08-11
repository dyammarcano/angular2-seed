import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MessageService } from "./shared/services/messages.service";

@Component({
  selector: 'app',
  pipes: [],
  providers: [MessageService],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class App implements OnInit, OnDestroy {
  message:string = "";

  constructor (public messageService:MessageService) {}

  ngOnInit():any {
    console.info('Init App Component');
  }

  ngOnDestroy():any {
    console.info('Destroy App Component');
  }

  //this.msgSrv.send('message', msg);

  /*send(msg) {
    //localStorage.setItem('message', msg);
    console.info("input:", msg);
    //this.messages.emit('message', msg);
  }*/
}
