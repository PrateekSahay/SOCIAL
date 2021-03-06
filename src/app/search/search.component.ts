import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../data-collection.service';
import { ActivatedRoute, Data } from '@angular/router';
import { topicClass } from '../all-topics/topic.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  title: string;
  display : string;
  topicSearch: any;
  subject: string = "";

  searchResult : any[]

  constructor(
    private route: ActivatedRoute,
    private topicsService: DataCollectionService
  ) { }

  ngOnInit() {
    this.getSearchResult();
  }

  getSearchResult() {
    this.searchResult = []
    this.topicsService.getTopics().subscribe(
      (data) => {
        this.topicSearch = data;
        console.log("TopicSearch", this.topicSearch)
        for (let item of this.topicSearch) {
          console.log(item.topicName);
          if(this.subject.toUpperCase() == item.topicName.toUpperCase()){
            console.log(item)
            var topic = new topicClass()
            topic.posts = item.posts
            topic.topic_id = item.topicId
            topic.topic_name = item.topicName
            this.searchResult.push(topic)
          }
        }
        console.log("---length---"+this.searchResult.length)
        console.log(this.searchResult);
      })
  }

  gotoGameplay(){
    window.location.href = "http://172.23.238.164:4202/play";
  }
}
