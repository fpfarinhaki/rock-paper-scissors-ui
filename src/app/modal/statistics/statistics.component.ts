import { Component, OnInit } from '@angular/core';
import { GamesessionService } from 'src/app/service/gamesession.service';
import { Totals } from 'src/app/domain/totals';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit{
  totals: Totals;
  constructor(private gameService: GamesessionService,
              public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.gameService.getTotals().subscribe(response => {
      this.totals = response;
    });
  }
}
