import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataCollectionService } from '../data-collection.service';
import { createPost } from "./posts.model";

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
  postid: number = 1

  constructor(
    private topicsService: DataCollectionService,
    private route: ActivatedRoute,
    private router: Router) { }

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

  }

  gotoGameplay() {
    window.location.href = "http://172.23.238.164:7000/gameplay/play";
  }

  createPosts() {
    console.log("--post--", this.post)
    var feed = new createPost()
    feed.posts = this.post
    feed.topicForeignKey = this.id
    feed.userForeignKey = this.postid
    this.topicsService.postFeed(feed)
    console.log("--post--", feed)
  }
}
