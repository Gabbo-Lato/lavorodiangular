import { Component } from '@angular/core';

@Component({
  selector: 'app-tf2',
  templateUrl: './tf2.component.html',
  styleUrls: ['./tf2.component.css']
})
export class TF2Component {
  characters = [
    { 
      name: 'Pyro',
      description: ' Il Pyro è specializzato nel combattimento ravvicinato e nel controllo dell area con armi infuocate e attrezzature speciali.',
      imagePath: 'assets/images/Pyro.webp' 
    },
    { 
      name: 'Soldier',
      description: ' Il Soldato è una classe resistente e versatile con un lanciarazzi.',
      imagePath: 'assets/images/Soldier.webp' 
    },
    { 
      name: 'Spy',
      description: 'La Spia è una classe astuta specializzata in spionaggio e colpi dietro le spalle.',
      imagePath: 'assets/images/spy.jpeg' 
    }
    
  ];
}

