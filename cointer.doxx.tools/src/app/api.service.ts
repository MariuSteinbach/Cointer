import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()

export class ApiService{

  constructor(private http: HttpClient) { }

  addCoin(Coin){
    this.http.post('https://cointer.steinbach.io/api/coins/create', {valueID: Coin}).subscribe(res => {
      console.log(res)
    })
  }

  getCoins(){
    return this.http.get('https://cointer.steinbach.io/api/coins')
  }

  getValues() {
    return this.http.get('https://cointer.steinbach.io/api/values')
  }
}
