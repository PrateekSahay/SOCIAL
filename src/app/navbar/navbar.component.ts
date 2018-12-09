import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userName: any
  userId: any

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    let token = this.cookieService.get("UserLoginAPItoken");
    let jwtData = token.split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    let userId = decodedJwtData.UserID;
    let userName = decodedJwtData.Name;

    this.userName = userName;
    this.userId = userId;
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
