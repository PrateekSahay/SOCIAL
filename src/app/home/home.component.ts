import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { DataCollectionService } from '../data-collection.service'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  connection: any
  games: any
  posts: any

  constructor(
    private postService: DataCollectionService,
    private cookieService: CookieService
    ) { }

  ngOnInit() {
    this.connection = new signalR.HubConnectionBuilder()
    .withUrl('http://172.23.238.164:7000/gameplayhub')
    .build();
    this.connection.start().then(() => this.connection.send("SendPendingGames"))
    .catch((err) => console.log('Error::: ', err));
    this.connection.on("GetPendingGames", (res) => {
    this.games = res
      console.log("pending games", this.games);
    });

    let token = this.cookieService.get("UserLoginAPItoken");
    let jwtData = token.split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    let userId = decodedJwtData.UserID;

    this.postService.getPersonalizedPosts(userId).subscribe(
      (data) => {
        this.posts = data;
        console.log("--personalizedPosts--", this.posts);
      }
    )
  }

  gotoJoiningPage(GameId: string) {
    console.log(GameId);
    for (let i=0; i<this.games.length; i++) {
      if (this.games[i].gameId == GameId) {
        console.log(this.games[i].gameId);
        if (this.games[i].numberOfPlayersRequired == 2) {
          window.location.href = "http://172.23.238.164:7000/gameplay/play/" + this.games[i].topic + "/two-players";
        }
        else if (this.games[i].numberOfPlayersRequired == 3) {
          window.location.href = "http://172.23.238.164:7000/gameplay/play/" + this.games[i].topic + "/three-players";
        }
        else {
          window.location.href = "http://172.23.238.164:7000/gameplay/play/" + this.games[i].topic + "/four-players";
        }
        break;
      }
    }
  }
}
