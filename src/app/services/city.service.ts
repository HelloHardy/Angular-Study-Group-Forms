import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities = [
    { id: 1, name: 'Shah Alam' },
    { id: 2, name: 'Subang' }
  ];;

  constructor() {}
}
