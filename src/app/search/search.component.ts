import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../data-collection.service';
import { ActivatedRoute, Data } from '@angular/router';
import { SearchClass } from './search.model';

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
          console.log(item.topic_name);
          if(this.subject == item.topic_name){
            console.log(item)
            var topic = new SearchClass()
            // scls.topic_name = item.topic_name
            topic.posts = item.posts
            topic.topic_id = item.topic_id
            topic.topic_image = item.topic_image
            topic.topic_name = item.topic_name
            this.searchResult.push(topic)
            // this.SearchResult.splice(this.start_index, this.number_of_elements_to_remove, item);
            // console.log("SearchResult", this.SearchResult);
            // this.display=item.topic_name;
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
