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
  
  gameSession: Gamesession = new Gamesession();
  lastPlayedRound: Round = new Round();
 
  public playRound() {
    let round = this.gameService.playARound(this.gameSession.id);
    round.subscribe(gameSession => {
      console.log(gameSession);
      this.gameSession = gameSession;
      this.lastPlayedRound = gameSession.roundsPlayed[gameSession.roundsPlayed.length - 1]
    })
  }

  public restart() {
    this.gameSession = new Gamesession();
    this.lastPlayedRound = new Round();
  }

}
