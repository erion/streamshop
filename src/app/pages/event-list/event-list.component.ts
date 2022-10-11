import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../interfaces/interfaces';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: IMovie[] = [];

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.service.getEvents().subscribe(events => this.events = events);
  }

}
