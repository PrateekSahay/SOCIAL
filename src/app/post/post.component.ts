import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../data-collection.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from "@angular/router";

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

  constructor(
    private postService: DataCollectionService,
    private cookieService: CookieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.postId = params.get("id") })
    console.log("---topic_details--" + this.postId);

    this.postService.getPostsById(this.postId).subscribe(
      (data) => {
        this.post = data;
        console.log("--post--", this.post);
      }  
    );

    let token = this.cookieService.get("UserLoginAPItoken");
    let jwtData = token.split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    let userId = decodedJwtData.UserID;

    this.userId = userId;

    const comment: HTMLInputElement = document.querySelector('#comment');

    comment.addEventListener('keyup',(enter: KeyboardEvent) => {
      if(enter.keyCode === 13) {
        this.createComment();
      }
    });
  }

  createComment() {
    console.log("--comment--", this.comment);
    var comments = new this.createComment()
    comments.comment = this.comment
    comments.postId = this.postId
    comments.userId = this.userId
    this.postService.postComment(comments)
    console.log("--comment created--", comments)
  }

  
}
