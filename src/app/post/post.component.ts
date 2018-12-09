import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../data-collection.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from "@angular/router";
import { createComment } from "./comment.model";
import * as signalR from '@aspnet/signalr';
import { notifications } from '../notification/notification.model'
import * as jwtDecode from 'jwt-decode';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any
  postId: any
  name: any
  comment: string = ""
  userId: any
  userName: any
  topicName: any
  connection: any

  constructor(
    private postService: DataCollectionService,
    private cookieService: CookieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.postId = params.get("id") })
    console.log("---post_details--" + this.postId);

    this.route.paramMap.subscribe(params => { this.topicName = params.get("name") })
    console.log("---post_details--" + this.topicName);


    this.connection = new signalR.HubConnectionBuilder()
     .withUrl('http://172.23.238.164:7000/notifications')
     .build();

     this.connection.start()
     .then(() =>
       {console.log('connection established');
       this.connection.Send("GetNotifications");})
      .catch((err) => console.log('Error::: ', err));

    this.postService.getPostsById(this.postId).subscribe(
      (data) => {
        this.post = data;
        console.log("--post--", this.post);
      }
    );

    let token = this.cookieService.get("UserLoginAPItoken");
    let decodedJwtData = jwtDecode(token);
    let userId = decodedJwtData.UserID;
    let userName = decodedJwtData.Name;

    this.userId = userId;
    this.userName = userName;

    const comment: HTMLInputElement = document.querySelector('#comment');

    comment.addEventListener('keyup',(enter: KeyboardEvent) => {
      if(enter.keyCode === 13) {
        this.createComment();
      }
    });


  }

  createComment() {
    console.log("--comment--", this.comment);
    var comments = new createComment()
    comments.comment = this.comment
    comments.postId = this.postId
    comments.userId = this.userId
    comments.userName = this.userName
    this.postService.postComment(comments).subscribe((data) => console.log(data));
    console.log("--comment created--", comments)
  }

  createNotification() {
    var notification = new notifications()
    notification.Message = this.userId+"has commented on your post"
    notification.TargetUrl = "http://172.23.238.164:7000/topics/"+this.topicName+"/post/"+this.postId;
    // notification.Users = [
    //   this.post.userId,
    //   this.post.comments.userId
    // ]
    // this.connection.Send("GetNotifications")
  }
}
