import { Component, OnInit } from '@angular/core';
import { EventStorageService } from '../shared/event-storage.service';
import { ActivatedRoute } from '@angular/router';
import {IEvent} from '../shared/event.model';

@Component({
  // selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  public event: IEvent;

  public constructor(private eventService: EventStorageService,
                        private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

}
