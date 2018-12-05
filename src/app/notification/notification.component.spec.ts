import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCollectionService } from '../data-collection.service';
import { NotificationComponent } from './notification.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationComponent ],
      imports:[HttpClientModule],
      providers: [DataCollectionService, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
