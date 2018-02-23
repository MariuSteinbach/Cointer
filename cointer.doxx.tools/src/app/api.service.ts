import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()

export class ApiService{

  constructor(private http: HttpClient) { }

  addCoin(Coin){
    return this.http.post('https://cointer.steinbach.io/api/coins/create', {valueID: Coin})
  }

  getCoins(){
    return this.http.get('https://cointer.steinbach.io/api/coins')
  }

  getValues() {
    return this.http.get('https://cointer.steinbach.io/api/values')
  }
}
