import { Round } from './round';

export class Gamesession {
    id: string;
    roundsPlayed: Round[];

    constructor() {
        this.roundsPlayed = [];
    }
}
