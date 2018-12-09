import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userName: any;
  userId: any;
  connection: any;
  notificationCount: number;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.notificationCount = 0;
  }

  ngOnInit() {

    this.connection = new signalR.HubConnectionBuilder()
     .withUrl('http://172.23.238.164:7000/hub/notifications')
     .build();

     this.connection.on("notification", (notification) => {
      this.notificationCount++;
     });

    let token = this.cookieService.get("UserLoginAPItoken");

    let decodedJwtData = jwtDecode(token);
    let userId = decodedJwtData.UserID;
    let userName = decodedJwtData.Name;

    this.userName = userName;
    this.userId = userId;

    this.connection.start()
     .then(() => {
       console.log('connection established');
       this.connection.send("Init", this.userId);
      })
     .catch((err) => console.log('Error::: ', err));

  }

  gotoProfile() {
    // for (let post of this.posts) {
    //   var name = new Post()
    //   name.userName = post.userName
    //   name.userId = post.userId
    // }
    this.router.navigate(['/profile/' + this.userName], { queryParams: {UserData: this.userId}})
  }

}
