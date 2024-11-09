import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstContent:any;
  contents:any

  constructor(
  ) { 
    this.firstContent = dataFake[0]
    this.contents = dataFake.slice(1)
  }

  ngOnInit(): void {
  }

}
