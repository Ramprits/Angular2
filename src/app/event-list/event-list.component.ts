import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  handaleClickMe(){
    alert ('Hello I m called !')
    console.log('clicked ');
  }
  event={
    id:101,
    name:"jim cooper",
    date:'02/20/2013',
    time:'10:00 am',
    price:599.00,
    imageUrl: '/app/assets/images/angularconnect-shield.png',
    location:{
      address:'USA',
      city:'Las Angelus',
      country:'United America'
    }
  }

}
