import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataCollectionService } from '../data-collection.service';

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
    private postService: DataCollectionService
    ) { }

  ngOnInit() {
    let token = this.cookieService.get("UserLoginAPItoken");
    let jwtData = token.split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    let userId = decodedJwtData.UserID;
    let fullName = decodedJwtData.Name;
    let email = decodedJwtData.Email;

    this.name = fullName;
    this.email = email;
    this.userId = userId;

    this.postService.getPersonalizedPosts(this.userId).subscribe(
      (data) => {
        this.posts = data;
        console.log("--personalized posts--", this.posts);
      }
    )
  }


}
