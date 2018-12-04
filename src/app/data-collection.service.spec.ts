import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataCollectionService } from './data-collection.service';

fdescribe('DataCollectionService', () => {
  let service: DataCollectionService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
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