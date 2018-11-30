import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataCollectionService } from './data-collection.service';

describe('DataCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({ 
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: DataCollectionService = TestBed.get(DataCollectionService);
    expect(service).toBeTruthy();
  });
});
