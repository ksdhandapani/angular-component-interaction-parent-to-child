import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Interaction - parent-to-child';
  counter = 1;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
