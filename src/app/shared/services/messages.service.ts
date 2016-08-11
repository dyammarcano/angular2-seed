import { Injectable, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MessageService {
  socket:any = null;
  url:string = localStorage.getItem('device_url');

  constructor() {
    this.socket = io(this.url);
    let listener = Observable.fromEvent(this.socket, 'message');
    listener.subscribe((payload) => {
      console.log(payload);
    });
  }

  send(channel:string, msg:string):void {
    this.socket.emit(channel, msg);
    console.info(channel, msg);
  }
}
