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
    return this.http.get("http://172.23.238.164:7000/socialengine/posts/user/"+id)
  }

  // Calling in All topics

  // getCheckingTopics(follow) {
  //   return this.http.get("http://172.23.238.164:7000/socialengine/follow/check", follow)
  // }

  // Calling in User Component and public profile component

  getUserSpecificPost(id: string) {
    return this.http.get("http://172.23.238.164:7000/socialengine/posts/user/id/"+id);
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

  // Calling in topics component

  postFollowingTopics(Follow) {
    return this.http.post("http://172.23.238.164:7000/socialengine/follow", Follow);
  }

  // Calling in Notifications Component

  getNotifications(id: string) {
    return this.http.get("http://172.23.238.164:7000/api/notifications/"+id);
  }

  // Calling in topic component
  
  // deleteFollowingTopic(follow) {
  //   return this.http.delete("http://172.23.238.164:7000/socialengine/follow", follow)
    // return this.http.delete("http://")
  
}
