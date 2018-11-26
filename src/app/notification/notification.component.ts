import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  // connection:any;
  // notif:string;
  // username = new Date().getTime();
  // message: string;
  constructor() { }

  ngOnInit() {
    // this.connection = new signalR.HubConnectionBuilder()
    // .withUrl('https://localhost:5001/notificationhub')
    // .build();

    // this.connection.start()
    // .then(() => console.log("connection established"))
    // .catch((err) => console.log("error:: ", err));

    // this.connection.on ("MessageReceived",(notification: string) =>
    // {
    //   this.notif = notification;
    // });

    


  }
  // send()
  // {
  //   this.connection.send("SendMessage", this.username, this.message);
  // }

}
