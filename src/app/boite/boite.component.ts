import { Component, Input, Output } from '@angular/core';
import { TirelireComponent } from '../tirelire/tirelire.component';

@Component({
  selector: 'boite',
  templateUrl: './boite.component.html',
  styleUrls: ['./boite.component.css']
})


export class BoiteComponent {
  un:number = 0;
  deux:number = 0;
  trois:number = 0;

  add100f() {
    let number = Math.floor(Math.random()* 4);
    switch (number) {
      case 1:
        this.un += 100;
        break;
      case 2:
        this.deux += 100;
        break;
      case 3:
        this.trois += 100;
        break;
      default:
        break;
    }
  }

  removeFrancs(number:number){
    switch (number) {
      case 1:
        this.un = 0;
        break;
      case 2:
        this.deux = 0;
        break;
      case 3:
        this.trois = 0;
        break;
      default:
        break;
    }
  }
}
