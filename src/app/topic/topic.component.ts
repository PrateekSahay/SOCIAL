import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataCollectionService } from '../data-collection.service';
import { createPost } from "./posts.model";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topics: any;
  posts: any;
  name: any;
  id: any;
  topicposts: any;
  post: string = ""
  userId: any;

  constructor(
    private topicsService: DataCollectionService,
    private route: ActivatedRoute,
    private cookieService: CookieService) { }

  ngOnInit() {
    console.log("Init in topic");
    this.route.paramMap.subscribe(params => { this.name = params.get("id") })
    console.log("---topic_details--"+this.name);

    this.route.queryParams.subscribe(params => { this.id = +params["topicData"] })
    console.log("---topic_details--"+this.id);

    this.topicsService.getPosts(this.name).subscribe(
      (data) => {
        this.posts = data;
        console.log("Posts", this.posts);
      });

      let token = this.cookieService.get("UserLoginAPItoken");
      let jwtData = token.split('.')[1];
      let decodedJwtJsonData = window.atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);
      let userId = decodedJwtData.UserID;

      this.userId = userId;
  }

  gotoGameplay() {
    window.location.href = "http://172.23.238.164:7000/gameplay/play/"+this.name;
  }

  createPosts() {
    console.log("--post--", this.post)
    var feed = new createPost()
    feed.post = this.post
    feed.topicId = this.id
    feed.userId = this.userId
    this.topicsService.postFeed(feed)
    console.log("--post--", feed)
  }
}
