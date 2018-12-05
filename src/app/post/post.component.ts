import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../data-collection.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any
  id: any
  comment: string =""

  constructor(private postService: DataCollectionService) { }

  ngOnInit() {
    this.postService.getPostsById(this.id).subscribe(
      (data) => {
        this.post = data;
        console.log("--post--", this.post);
      }
    );
  }

  // createComment() {
  //   console.log("--comment--", this.comment);
  //   var comments = new this.createComment()
  //   comments.comment = this.comment
  //   comments.PostForeignKey = this.post.id
  //   comments.UsercomForeignKey = this.userid
  // }
}
