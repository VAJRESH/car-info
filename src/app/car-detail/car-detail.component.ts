import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  car: Car | undefined;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.loadCarDetails();
  }

  loadCarDetails() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCar(id).subscribe(car => this.car = car);
  }

  goBack(): void {
    this.location.back();
  }
}
