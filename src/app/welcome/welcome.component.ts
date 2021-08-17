import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  topSellingCars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.loadTopSellers();
  }

  loadTopSellers() {
    this.carService
      .getCars()
      .subscribe((car) => (this.topSellingCars = car.slice(0, 4)));
  }
}
