import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  updateValue(event){
    this.name = event.target.value;
    // console.log(event.target.value);
  }
}
