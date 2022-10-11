import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent} from '../../interfaces/interfaces';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  events: IEvent[] = [];

  constructor(
    private service: ServicesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getEvent(id).subscribe(event => this.events = event);
  }

}
