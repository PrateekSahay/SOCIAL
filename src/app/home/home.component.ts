import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { DataCollectionService } from '../data-collection.service'
import { CookieService } from 'ngx-cookie-service';

import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { topicClass } from '../all-topics/topic.model';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  connection: any;
  games: any;
  posts: any;
  userId: any;
  topics: any;

  constructor(
    private dataService: DataCollectionService,
    private cookieService: CookieService,
    private router: Router
    ) { }

  ngOnInit() {

    this.dataService.getPersonalizedPosts(this.userId).subscribe(
      (data) => {
        this.posts = data;
        console.log("--personalizedPosts--", this.posts);
      }
    );

    this.dataService.getTopics().subscribe(
      (data) => {
      this.topics = data;
      console.log("--topics--", this.topics);
    });

    this.connection = new signalR.HubConnectionBuilder()
    .withUrl(environment.gameplayHub)
    .build();
    this.connection.start()
    .then(() => this.connection.send("SendPendingGames"))
    .catch((err) => console.log('Error::: ', err));
    this.connection.on("GetPendingGames", (res) => {
      this.games = res
      console.log("pending games", this.games);
    });

    let token = this.cookieService.get("UserLoginAPItoken");

    let decodedJwtData = jwtDecode(token);
    this.userId = decodedJwtData.UserID;


  }

  gotoGameplay(topicName) {
    window.location.href = `${environment.gameplay}/play/${topicName}/two-players`;
  }

  gotoTopic(topicData) {
    var topic = new topicClass()
    topic.posts = topicData.posts
    topic.topic_id = topicData.topicId
    topic.topic_name = topicData.topicName
    console.log("--selected--", topic)
    this.router.navigate(['/topics/', topicData.topicName], { queryParams: {topicData: topicData.topicId}})
  }

  gotoJoiningPage(GameId: string) {
    console.log(GameId);
    for (let i=0; i<this.games.length; i++) {
      if (this.games[i].gameId == GameId) {
        console.log(this.games[i].gameId);
        {
          window.location.href = "http://172.23.238.164:7000/gameplay/play/" + this.games[i].topic + "/two-players";
        }
        break;
      }
    }
  }
}
