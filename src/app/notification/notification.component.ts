import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { DataCollectionService } from '../data-collection.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notification: any;
  userId: any;
  connection:any;

  constructor(
    private notificationService: DataCollectionService,
    private cookieService: CookieService
    ) { }

  ngOnInit() {

    let token = this.cookieService.get("UserLoginAPItoken");
    let jwtData = token.split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    let userId = decodedJwtData.UserID;

    this.userId = userId;
    
    this.connection = new signalR.HubConnectionBuilder()
     .withUrl('http://172.23.238.164:7000/hub/notifications')
     .build();

     this.connection.on('Notifications', (notification) => {
       this.notification = notification;
       console.log("--Notifications--", this.notification)
     });
     this.connection.start()
     .then(() => {
       console.log('connection established');
       this.connection.send("Init", this.userId);
      })
     .catch((err) => console.log('Error::: ', err));

    this.notificationService.getNotifications(this.userId).subscribe(
      (data) => {
        console.log(data);
        this.notification = data;
        console.log("notifications", this.notification);
      }
    )
  }
}
