import {Component} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  mensajes = [
    {texto: 'primer mensaje', titulo: 'Titulo 1'},
    {texto: 'segundo mensaje', titulo: 'Titulo 2'},
    {texto: 'tercer mensaje', titulo: 'Titulo 3'},
  ];

  constructor() {
  }
}
