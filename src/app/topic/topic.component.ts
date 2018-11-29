import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataCollectionService } from '../data-collection.service';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';
import { url } from 'inspector';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topics: any;
  posts: any;
  name: any;
  topicposts: any;

  constructor(
    private topicsService: DataCollectionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.topicsService.getTopics().subscribe(
      (data) => {
        this.topics = data;
        console.log()
        console.log("Topics", this.topics);
      }
    )

    this.route.paramMap.subscribe(params => { this.name = params.get("id") })
    console.log(this.name);

    this.topicsService.getPosts(this.name).subscribe(
      (data) => {
        this.posts = data;
        console.log("Posts", this.posts);
      })

  }

  gotoGameplay(){
    window.location.href = "http://172.23.238.164:4202/play";
  }
}
