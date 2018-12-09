import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataCollectionService } from '../data-collection.service';
import { ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  topic: string;
  score: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { topic: 'TP1', score: 120 },
  { topic: 'TP2', score: 70 },
  { topic: 'TP3', score: 90 },
];

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  displayedColumns: string[] = ['topic', 'score'];
  dataSource = ELEMENT_DATA;
  name: any
  email: any
  userId: any
  posts: any

  constructor(
    private cookieService: CookieService,
    private postService: DataCollectionService,
    private route : ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.name = params.get("id") })
    console.log("---topic_details--" + this.name);

    this.route.queryParams.subscribe(params => { this.userId = +params["UserData"] })
    console.log("---topic_details--" + this.userId);



    this.postService.getUserSpecificPost(this.userId).subscribe(
      (data) => {
        this.posts = data;
        console.log("--personalized posts--", this.posts);
      }
    )
  }


}
