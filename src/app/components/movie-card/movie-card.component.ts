import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: IMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
