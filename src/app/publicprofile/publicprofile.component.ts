import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../data-collection.service'

@Component({
  selector: 'app-publicprofile',
  templateUrl: './publicprofile.component.html',
  styleUrls: ['./publicprofile.component.css']
})
export class PublicprofileComponent implements OnInit {

  users: any
  posts: any

  constructor(private postService: DataCollectionService) { }

  ngOnInit() {
    this.postService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log("--users--", this.users);
      }
    );

    this.postService.getPersonalizedPosts(this.users.userId).subscribe(
      (data) => {
        this.posts = data;
        console.log("--posts--", this.posts);
      }
    );
  }

}
