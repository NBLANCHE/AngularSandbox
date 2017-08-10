import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // custom html tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// define a property and export
export class AppComponent {
}
// use service to inject a component (as a dependency)
