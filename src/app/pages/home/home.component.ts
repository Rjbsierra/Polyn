import { Component } from '@angular/core';
import {trigger, state, style, transition, animate, query, group} from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('openTask', [
      transition(':enter', [
        group([
          query('.task__container', [
            style({transform: 'translateY(100%)' }),
            animate('300ms ease-out', style({transform: 'translateY(0)' }))
          ], {optional: true}),
          query('.task', [
            style({backgroundColor: 'rgba(0, 0, 0, 0.0)'}),
            animate('500ms ease-out', style({backgroundColor: 'rgba(0, 0, 0, 0.5)'}))
          ], {optional: true}),
        ]),
      ]),
      transition(':leave', [
        group([
          query('.task__container', [
            style({transform: 'translateY(0)' }),
          animate('300ms ease-in', style({transform: 'translateY(100%)' }))
          ], {optional: true}),
          query('.task', [
            style({backgroundColor: 'rgba(0, 0, 0, 0.5)'}),
            animate('500ms ease-out', style({backgroundColor: 'rgba(0, 0, 0, 0.0)'}))
          ], {optional: true})
        ])
  
      ])
    ])
  ]
})
export class HomeComponent {
  isOpened: boolean = false;

  toggleTask() {
    this.isOpened = !this.isOpened;
  }
 
}
