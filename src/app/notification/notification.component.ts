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

    this.notificationService.getNotifications(this.userId).subscribe(
      (data) => {
        console.log(data);
        this.notification = data;
        console.log("notifications", this.notification);
      }
    )
  }
}
