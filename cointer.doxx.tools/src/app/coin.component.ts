import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
  selector: 'coin',
  templateUrl: './coin.component.html'
})

export class CoinComponent {

  Coin = {}

  constructor(private api: ApiService)
  {

  }

  Add(Coin) {
    this.api.addCoin(Coin)
  }
  Sub(Coin) {
    console.log(Coin, " was Subtracted.")
  }
}
