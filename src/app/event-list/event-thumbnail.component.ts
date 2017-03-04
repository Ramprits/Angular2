import { Component, OnInit,Input } from '@angular/core';

@Component({
     selector: 'event-thumbnail',
     templateUrl: 'event-thumbnail.component.html'
})
export class EventThumbnailComponent implements OnInit {
     constructor() { }
      ngOnInit() { }
      @Input() event:any
}