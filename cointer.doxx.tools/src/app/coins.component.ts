import { Component } from '@angular/core'
import { ApiService } from './api.service'
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'coins',
  templateUrl: './coins.component.html'
})

export class CoinsComponent {

  Coins
  Worth
  Values = [
    {
      "cents": 0,
      "count": 0,
      "name": "Loading...",
      "ownerID": 0,
      "valueID": 0,
      "coins": [

      ]
    }
  ]

  constructor(private api: ApiService)
  {
  }

  ngOnInit() {
    this.api.getCoins().subscribe(res => {
      this.Coins = res
      this.Worth = 0
      this.api.getValues().subscribe(res => {
        this.assignCoins(this.Coins, res)
        this.getWorth()
      })
    })
  }

  assignCoins(Coins, Values) {
    this.Values = Values
    for (var i = 0; i < Values.length; i++) {
      Values[i].coins = []
    }
    for(var i = 0; i < Coins.length; i++) {
      Coins[i].added = new Date(Date.parse(Coins[i].added))
    }
      Coins.sort(function (a, b) {
        return a.added - b.added
      }).reverse()
    for(var i = 0; i < Coins.length; i++) {
      this.Values.find(function(element) {
        return element.valueID === Coins[i].valueID;
        //}).coins.push(Coins[i])
      }).coins.push(Coins[i])
    }
  }

  getWorth() {
    for(var i = 0; i < this.Values.length; i++) {
      this.Worth += this.Values[i].cents * this.Values[i].coins.length
    }
  }

  assignCoin(Coin) {
    this.Coins.push(Coin)
    this.Values.find(function(element) {
      return element.valueID === Coin.valueID;
    }).coins.push(Coin)
  }

  Add(Coin) {
    this.api.addCoin(Coin).subscribe( res => {
      this.assignCoin(res)
    })
  }
  Sub(Coin) {
    console.log(Coin, " was Subtracted.")
  }
}
