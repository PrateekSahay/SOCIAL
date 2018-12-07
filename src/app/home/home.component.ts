import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  connection: any
  games: any

  constructor() { }

  ngOnInit() {
    this.connection = new signalR.HubConnectionBuilder().withUrl('http://172.23.238.164:7000/gameplayhub').build();
    this.connection.start().then(() => this.connection.send("SendPendingGames")).catch((err) => console.log('Error::: ', err));
    this.connection.on("GetPendingGames", (res) => {
    this.games = res
      console.log("pending games", this.games);
    });
  }

  gotoJoiningPage(GameId: string) {
    console.log(GameId);
    for (let i=0; i<this.games.length; i++) {
      if (this.games[i].GameId == GameId) {
        // console.log(game);
        if (this.games[i].NumberOfPlayersRequired == 2) {
          window.location.href = "http://172.23.238.164:7000/gameplay/play/" + this.games[i].Topic + "/two-players";
        }
        else if (this.games[i].NumberOfPlayersRequired == 3) {
          window.location.href = "http://172.23.238.164:7000/gameplay/play/" + this.games[i].Topic + "/three-players";
        }
        else {
          window.location.href = "http://172.23.238.164:7000/gameplay/play/" + this.games[i].Topic + "/four-players";
        }
        break;
      }
    }
  }
}
