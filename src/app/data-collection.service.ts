import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataCollectionService {
  topics: any

  constructor(private http: HttpClient) { }

  getTopics() {
    try {
      
      console.log('inside getTopic()')
      var s = this.http.get('http://localhost:5126/api/topics');
      console.log(s);
      return s.subscribe((d) => console.log(d), (e) => console.log(e));
    } catch (e) {
      console.log(e);
    }
    // return this.http.get("http://172.23.238.164:8089/api/topics")
  }

  getPosts(topicname : string) {
   return this.http.get("http://172.23.238.164:8089/api/posts/"+topicname);
  }

  getPostsById(id : number) {
    return this.http.get("http://172.23.238.164:5002/api/posts"+id);
  }

  postFeed(feed) {
    console.log("------", feed);
    return this.http.post('http://172.23.238.164:8089/api/posts', feed);
  }

  getNotifications(id : string) {
    return this.http.get("http://172.23.238.164:5000/api/notifications"+id);
  }
}
