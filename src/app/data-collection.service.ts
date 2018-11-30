import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCollectionService {

  constructor(private http: HttpClient) { }

  getTopics() {
    console.log("Get Topics Service Method");
    return this.http.get("http://172.23.238.164:8089/api/topics")
      .pipe(
        catchError(err => { console.log(`error: ${err}`); return throwError(`Error: ${err}`); }),
      );
  }

  getPosts(topicname : string) {
   return this.http.get("http://172.23.238.164:8089/api/posts/"+topicname);
  }

  postFeed(feed) {
    console.log("------", feed);
    return this.http.post('http://172.23.238.164:8089/api/posts', feed);
  }
}
