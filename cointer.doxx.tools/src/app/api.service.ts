import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()

export class ApiService{

  constructor(private http: HttpClient) { }

  addCoin(Coin){
    this.http.post('https://localhost:44363/api/coins/create', {valueID: Coin}).subscribe(res => {
      console.log(res)
    })
  }

  getCoins(){
    return this.http.get('https://localhost:44363/api/coins')
  }

  getValues() {
    return this.http.get('https://localhost:44363/api/values')
  }
}
