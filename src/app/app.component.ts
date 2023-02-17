import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onDrawCreated($event: Event) {
throw new Error('Method not implemented.');
}
  title = 'angularmap';
options: any;
drawOptions: any;
drawnItems: any;
}
