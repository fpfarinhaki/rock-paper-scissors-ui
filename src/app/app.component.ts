import { Component } from '@angular/core';
import { GamesessionService } from './service/gamesession.service';
import { Round } from './domain/round';
import { Gamesession } from './domain/gamesession';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'Rock-Paper-Scissors Game';
  constructor(private gameService: GamesessionService){
  }
  
  gameSession: Gamesession; 
  lastPlayedRound: Round = new Round();
 
  public playRound() {
    let gameSession = this.gameService.playARound();
    gameSession.subscribe(gameSession => {
      console.log(gameSession);
      this.gameSession = gameSession;
      this.lastPlayedRound = gameSession.roundsPlayed[gameSession.roundsPlayed.length - 1]
    })
  }

}
