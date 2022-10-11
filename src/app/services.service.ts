import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMovie, IEvent } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private rootUrl = 'https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/';
  private eventsUrl = this.rootUrl+'api/v1/events';
  private eventId = 23345;
  private eventUrl = this.rootUrl+'api/v1/events/'+this.eventId+'/theaters'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  setEventId(eventId: number) {
    this.eventId = eventId;
  }

  getEvents() {
    return this.http.get<IMovie[]>(this.eventsUrl);
  }

  getEvent(eventId:number) {
    this.setEventId(eventId);
    console.log(this.eventUrl);
    return this.http.get<IEvent[]>(this.eventUrl);
  }

}
