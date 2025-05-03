import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

@Output() isOpened = new EventEmitter<void>();


  toggleTask(){
    this.isOpened.emit();
  }

  

}
