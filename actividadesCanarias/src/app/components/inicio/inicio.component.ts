import { Component } from '@angular/core';

interface Car {
  image: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {
  cars: Car[] = [];

  constructor() { }

  ngOnInit() {
      this.cars = [
          {
              image: '/assets/images/tandem-2764760_1280.jpg'
          },
          {
              image: '/assets/images/Lucha-canaria.jpg'
          },
          {
              image: '/assets/images/ruta_btt_en_suroeste_de_gran_canaria_01-gal.jpg'
          },
      ];
  }
}