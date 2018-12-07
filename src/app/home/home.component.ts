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
    this.connection.on("GetPendingGames", (res) => {this.games = res
    console.log("pending games", this.games);});
  }

  gotoJoiningPage(GameId : string) {
    var game = this.games.Where(g=> g.gameId, GameId).FirstOrDefault();
    if(game.numberOfPlayersRequired == 2) {
      window.location.href = "http://172.23.238.164:7000/gameplay/play/"+game.topic+"/two-players";
    }
    else if(game.NumberOfPlayersRequired == 3) {
      window.location.href = "http://172.23.238.164:7000/gameplay/play/"+game.Topic+"/three-players";
    }
    else {
      window.location.href = "http://172.23.238.164:7000/gameplay/play/"+game.Topic+"/four-players";
    }
  }
}
