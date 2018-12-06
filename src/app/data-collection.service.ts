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
   return this.http.get("http://172.23.238.164:7000/socialengine/posts/"+topicname);
  }

  getPostsById(id : number) {
    return this.http.get("http://172.23.238.164:7000/socialengine/posts"+id);
  }

  postFeed(feed) {
    console.log("---xxx---", feed);
    return this.http.post("http://172.23.238.164:7000/socialengine/post", feed);
  }

  getNotifications(id : string) {
    return this.http.get("http://172.23.238.164:7000/socialengine/notifications"+id);
  }
}
