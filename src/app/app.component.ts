import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Rock-Paper-Scissors Game';
  playerOneMove = 'Press Play Round button';
  playerTwoMove = 'Press Play Round button';
  roundResult = '';


}
