import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../data-collection.service';
import { ActivatedRoute, Router } from "@angular/router";
import { topicClass } from './topic.model';

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
    // console.log('this.topicsService.getTopics()', this.topicsService.getTopics());
    this.topicsService.getTopics();
    // this.topicsService.getTopics().subscribe((data) => {
    //     this.topics = data;
    //     console.log("topics----------------------");
    //   }
    // );
  }

  // function_temp(){
  //   console.log("Init");
  //  // console.log('this.topicsService.getTopics()', this.topicsService.getTopics());
  //   //topicsService.getTopics();
  //   this.topicsService.getTopics().subscribe((data) => {
  //       // this.topics = data;s
  //       console.log("topics----------------------")
  //     }
  //   );
  // }

gotoGameplay(){
  window.location.href = "http://172.23.238.164:4202/play";
}

gotoTopic(topicData) {
  var topic = new topicClass()
  topic.posts = topicData.posts
  topic.topic_id = topicData.topic_id
  topic.topic_image = topicData.topic_image
  topic.topic_name = topicData.topic_name
  console.log("--selected--", topic)
  this.router.navigate(['/topics/', topicData.topic_name], { queryParams: {topicData: topicData.topic_id}})
}

}