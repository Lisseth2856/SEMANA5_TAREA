import { Component } from '@angular/core';
import { Compras } from './compras/compras';

@Component({
  selector: 'app-root',
  imports: [Compras],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
