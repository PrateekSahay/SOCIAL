import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataCollectionService {
  topics: any

  constructor(private http: HttpClient) {}

  getTopics() {
    return this.http.get('http://172.23.238.164:7000/socialengine/topics');
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
