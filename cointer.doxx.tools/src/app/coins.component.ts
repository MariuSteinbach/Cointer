import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
  selector: 'coins',
  templateUrl: './coins.component.html'
})

export class CoinsComponent {

  Coins

  constructor(private api: ApiService)
  {

  }

  ngOnInit() {
    this.api.getCoins().subscribe(res => {
      this.Coins = res
    })
  }

  Add(Coin) {
    this.api.addCoin(Coin)
  }
  Sub(Coin) {
    console.log(Coin, " was Subtracted.")
  }
}
