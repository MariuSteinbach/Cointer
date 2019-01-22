import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()

export class ApiService{

  constructor(private http: HttpClient) { }

  addCoin(Coin){
    return this.http.post('http://localhost:53772/api/coins/create', {valueID: Coin})
  }

  getCoins(){
    return this.http.get('http://localhost:53772/api/coins')
  }

  getValues() {
    return this.http.get('http://localhost:53772/api/values')
  }
}
