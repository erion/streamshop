import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../../interfaces/interfaces';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  @Input() event!: IEvent;

  constructor() { }

  ngOnInit(): void {
    console.log(this.event);
  }

}
