import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../data-collection.service';
import { ActivatedRoute, Data } from '@angular/router';
import { someClass } from './search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  SearchResult = [];
  Title: string;
  display : string;
  TopicSearch: any;
  start_index = 0;
  number_of_elements_to_remove = 0;
  subject: string = "";

  thatArray : any[]

  constructor(
    private route: ActivatedRoute,
    private TopicsService: DataCollectionService
  ) { }

  ngOnInit() {
    // this.route.queryParams.subscribe((data) => {
    //   this.Title = data['q'];
      // console.log(this.subject);
    

    // this.SearchService.getTopics().subscribe(
    //   (data) => {
    //     this.SearchResult = data;
    //     console.log("SearchResult", this.SearchResult);
    //   }
    // )
    this.getSearchResult();
  }

  getSearchResult() {
    this.thatArray = []
    this.TopicsService.getTopics().subscribe(
      (data) => {
        this.TopicSearch = data;
        console.log("TopicSearch", this.TopicSearch)
        for (let item of this.TopicSearch) {
          console.log(item.topic_name);
          if(this.subject == item.topic_name){
            console.log(item)
            var scls = new someClass()
            // scls.topic_name = item.topic_name
            scls.posts = item.posts
            scls.topic_id = item.topic_id
            scls.topic_image = item.topic_image
            scls.topic_name = item.topic_name
            this.thatArray.push(scls)
            // this.SearchResult.splice(this.start_index, this.number_of_elements_to_remove, item);
            // console.log("SearchResult", this.SearchResult);
            // this.display=item.topic_name;
          }
        }
        console.log("---length---"+this.thatArray.length)
        console.log(this.thatArray);
      })
  }
}
