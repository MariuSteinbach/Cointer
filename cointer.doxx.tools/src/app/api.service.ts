import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()

export class ApiService{

  constructor(private http: HttpClient) { }

  addCoin(Coin){
<<<<<<< HEAD
    this.http.post('https://cointer.steinbach.io/api/coins/create', {valueID: Coin}).subscribe(res => {
=======
    this.http.post('https://localhost:44363/api/coins/create', {valueID: Coin}).subscribe(res => {
>>>>>>> 346e44c80e6c61af2dad90b3b2dfdb1280849cf2
      console.log(res)
    })
  }

  getCoins(){
<<<<<<< HEAD
    return this.http.get('https://cointer.steinbach.io/api/coins')
  }

  getValues() {
    return this.http.get('https://cointer.steinbach.io/api/values')
=======
    return this.http.get('https://localhost:44363/api/coins')
>>>>>>> 346e44c80e6c61af2dad90b3b2dfdb1280849cf2
  }
}
