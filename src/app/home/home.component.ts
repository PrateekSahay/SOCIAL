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
    this.connection = new signalR.HubConnectionBuilder().withUrl('#').build();
    this.connection.start().then(() => this.connection.send("SendPendingGames")).catch((err) => console.log('Error::: ', err));
    this.connection.on("GetPendingGames", (res) => {this.games = res
    console.log("pending games", this.games);});
  }
}
