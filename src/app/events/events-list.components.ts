import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>  
    </div>
        <event-thumbnail #thumbnail [event]="event1" ></event-thumbnail>
      `
})

export class EventsListComponent{
    event1 = {
        id: 1,
        name: 'First Angular Event',
        date: '1/13/2023',
        time: '15:44 pm',
        price: 255.55,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: 'John Smith Str',
            city: 'London',
            country: 'UK'
        }
    }
}