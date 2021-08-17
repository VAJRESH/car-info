import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './car';
import { CARS } from './mock-cars';
import { ToastMessagesService } from './toast-messages.service';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private toastMessageService: ToastMessagesService) {}

  getCars(): Observable<Car[]> {
    const cars = of(CARS);
    this.toastMessageService.add('Car Details Loaded');
    return cars;
  }

  getCar(id: number) {
    const car = CARS.find((c) => c.id === id)!;
    this.toastMessageService.add(`Loaded car details of id ${id}`);
    return of(car);
  }
}
