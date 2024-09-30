import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';  // Ensure correct import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent],  // Include TestComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // Use styleUrls (plural)
})
export class AppComponent {
  title = 'hello_Gal Gadot';
}
