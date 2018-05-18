import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  activeResultBckColor: Boolean = false;

  constructor() { }

  ngOnInit() {
    this.activeResultBckColor = true;
  }

  getBckColorExp () {
    return this.activeResultBckColor;
  }

}
