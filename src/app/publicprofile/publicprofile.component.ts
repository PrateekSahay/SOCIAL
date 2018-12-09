import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../data-collection.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicprofile',
  templateUrl: './publicprofile.component.html',
  styleUrls: ['./publicprofile.component.css']
})
export class PublicprofileComponent implements OnInit {

  users: any
  posts: any
  name: any

  constructor(
    private postService: DataCollectionService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {this.name = params.get("id")})
    console.log("--username--", this.name);

    this.postService.getUserSpecificPost(this.users.userId).subscribe(
      (data) => {
        this.posts = data;
        console.log("--posts--", this.posts);
      }
    );
  }

}
