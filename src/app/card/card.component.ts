import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cars?: Car[];

  constructor() {}

  ngOnInit(): void {}
}
