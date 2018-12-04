import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { DataCollectionService } from '../data-collection.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notification: any;
  constructor(private notificationService: DataCollectionService) { }

  ngOnInit() {
    // this.notificationService.getNotifications(UserId).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.notification = data;
    //     console.log("notifications", this.notification);
    //   }
    // )
  }

  CreateNotification() {

  }
}
