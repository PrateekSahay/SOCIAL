import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule, MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from '../app-routing.module';
import { } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { AllTopicsComponent } from '../all-topics/all-topics.component';
import { MessagesComponent } from '../messages/messages.component';
import { NotificationComponent } from '../notification/notification.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { UserprofileComponent } from '../userprofile/userprofile.component';
import { TopicComponent } from '../topic/topic.component';
import { PublicprofileComponent } from '../publicprofile/publicprofile.component';
import { SearchComponent } from '../search/search.component';

describe('TopicComponent', () => {
  let component: TopicComponent;
  let fixture: ComponentFixture<TopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        HomeComponent,
        AllTopicsComponent,
        MessagesComponent,
        NotificationComponent,
        ErrorPageComponent,
        UserprofileComponent,
        TopicComponent,
        PublicprofileComponent,
        SearchComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatDividerModule,
        MatButtonToggleModule,
        MatGridListModule,
        MatFormFieldModule,
        MatListModule,
        MatIconModule,
        MatTableModule,
        MatSelectModule,
        MatProgressBarModule,
        MatCardModule,
        MatSidenavModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule,
        MatExpansionModule,
        MatPaginatorModule,
        HttpClientTestingModule,
        FlexLayoutModule,
        MatTabsModule
      ],
      providers: [AllTopicsComponent,
        MatIconRegistry,{ provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
