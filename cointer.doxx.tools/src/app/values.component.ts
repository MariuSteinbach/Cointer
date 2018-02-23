import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
  selector: 'values',
  templateUrl: './values.component.html'
})

export class ValuesComponent {

  Values

  constructor(private api: ApiService)
  {

  }

  ngOnInit() {
    this.api.getValues().subscribe(res => {
      this.Values = res
    })
  }

  Add(Value) {
    this.api.addCoin(Value)
  }
  Sub(Value) {
    console.log(Value, " was Subtracted.")
  }
}
