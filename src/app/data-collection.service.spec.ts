import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { DataCollectionService } from './data-collection.service';

describe('DataCollectionService', () => {
  let service: DataCollectionService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [DataCollectionService, HttpClient]
  }));

  it('should be created', () => {
    const service: DataCollectionService = TestBed.get(DataCollectionService);
    expect(service).toBeTruthy();
  });
  
  it('should have getTopics() method', inject([DataCollectionService], (service) => {
    expect(service.getTopics()).toBeTruthy();
  })
  );
  
  it('should have getPost(topicName) method', inject([DataCollectionService], (service) => {
    expect(service.getPosts()).toBeTruthy();
  }))
});