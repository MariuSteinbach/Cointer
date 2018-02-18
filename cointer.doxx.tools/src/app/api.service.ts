import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()

export class ApiService{

  constructor(private http: HttpClient) { }

  addCoin(Coin){
    this.http.post('http://localhost:53772/api/coins/create', {valueID: Coin}).subscribe(res => {
      console.log(res)
    })
  }

  getCoins(){
    return this.http.get('http://localhost:53772/api/coins')
  }
}
