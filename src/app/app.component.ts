import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('abertoFechado', [
      state(
        'aberto',
        style({
          'background-color': 'rgb(210, 211, 211)',
        })
      ),
      state(
        'fechado',
        style({
          visibility: 'hidden',
          height: 0,
          opacty: 1,
        })
      ),
      transition('fechado => aberto', [animate('0.4s ease-out')]),
      transition('aberto => fechado', [animate('0.3s ease-in')]),
    ]),
  ],
})
export class AppComponent {
  estaAberto = false;
  textoBotao = 'Aberto';

  mudar() {
    this.estaAberto = !this.estaAberto;
    this.textoBotao = this.estaAberto ? 'Fechar' : 'Abrir';
  }
}
