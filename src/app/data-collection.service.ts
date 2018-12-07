import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataCollectionService {
  topics: any

  constructor(private http: HttpClient) { }

  // Calling in All-topics, search component

  getTopics() {
    return this.http.get('http://172.23.238.164:7000/socialengine/topics');
  }

  // Calling in topics component

  getPosts(topicname: string) {
    return this.http.get("http://172.23.238.164:7000/socialengine/posts/"+topicname);
  }

  // Calling in Post Component

  getPostsById(id: number) {
    return this.http.get("http://172.23.238.164:7000/socialengine/post/"+id);
  }

  // Calling in Home Component

  getPersonalizedPosts(id: string) {
    return this.http.get("http://172.23.238..164:7000/socialengine/posts/user/"+id)
  }

  // Calling in Public Profile Component

  getUsers() {
    return this.http.get("http://172.23.238.164:7000/socialengine/")
  }

  // Calling in topics component

  postFeed(feed) {
    console.log("---xxx---", feed);
    return this.http.post("http://172.23.238.164:7000/socialengine/post", feed);
  }

  // Calling in Post Component

  postComment(comment) {
    return this.http.post("http://172.23.238.164:7000/socialengine/comment", comment);
  }

  // Calling in All-topics and topics component

  postFollowingTopics(Follow) {
    return this.http.post("http://172.23.238.164:7000/socialengine/follow", Follow);
  }

  // Calling in Notifications Component

  getNotifications(id: string) {
    return this.http.get("http://172.23.238.164:7000/notifications/"+id);
  }
}
