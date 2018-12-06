import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { topicClass } from './topic.model';

import { DataCollectionService } from '../data-collection.service';

@Component({
  selector: 'app-all-topics',
  templateUrl: './all-topics.component.html',
  styleUrls: ['./all-topics.component.css']
})
export class AllTopicsComponent implements OnInit {

  topics: any;

  constructor(
    private topicsService: DataCollectionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("Init");
    this.topicsService.getTopics().subscribe(
      (data) => {
      this.topics = data;
      console.log("--topics--", this.topics);
    });
  }

  gotoGameplay() {
    window.location.href = "http://172.23.238.164:7000/gameplay/play";
  }

  gotoTopic(topicData) {
    var topic = new topicClass()
    topic.posts = topicData.posts
    topic.topic_id = topicData.topicId
    topic.topic_name = topicData.topicName
    console.log("--selected--", topic)
    this.router.navigate(['/topics/', topicData.topicName], { queryParams: {topicData: topicData.topicId}})
  }

}
