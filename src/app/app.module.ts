import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-list/event-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponentComponent,
    EventListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
