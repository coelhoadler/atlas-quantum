import { Btc } from '../../interfaces/btc.interface';
import { QuantumService } from '../../services/quantum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss'],
})
export class AppContentComponent implements OnInit {

  constructor(private _quantumSrv: QuantumService) { }

  public transactions: Array<Btc> = [];
  public errorLoad: Boolean = false;

  ngOnInit() {
    this.getProfts();
  }

  public getProfts() {
    this._quantumSrv
      .getData()
      .subscribe(
        (transactions: any) => {
          this.errorLoad = false;
          this.transactions = this.sortBTCByDescDate(transactions);
        },
        error => {
          this.errorLoad = true;
        }
      );
  }

  private sortBTCByDescDate(transactions: Array<Btc>): Array<Btc> {
    return transactions.sort((a, b) => {
      const aux1 = new Date(a.dateMoviment);
      const aux2 = new Date(b.dateMoviment);
      return aux1 < aux2 ? 1 : aux1 > aux2 ? -1 : 0;
    });
  }

}
