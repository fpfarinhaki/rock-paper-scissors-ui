import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundresult'
})
export class RoundresultPipe implements PipeTransform {

  transform(result: string): string {
    return Result[result];
  }
}

export enum Result {
  PLAYER1_WIN = "Player 1 Wins!",
  PLAYER2_WIN = "Player 2 Wins!",
  DRAW = "It's a Draw!"
}
