import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  loadCarsList(): void {
    this.carService.getCars().subscribe((cars) => (this.cars = cars));
  }

  ngOnInit(): void {
    this.loadCarsList();
  }
}
