import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataCollectionService {

  constructor(private http: HttpClient) { }

  getTopics()
  {
    return this.http.get("http://172.23.238.164:8089/api/topics");
  }
  getPosts(topicname : string)
  {
   return this.http.get("http://172.23.238.164:8089/api/posts/"+topicname);
  }
  postUser(user)
  {
    return this.http.post("http://localhost:5000/api/values/UserInfo",user);
  }


}
