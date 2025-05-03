import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-task',
 
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Output() isClosed = new EventEmitter<void>();

  taskClose(){
    this.isClosed.emit();
  }
}
