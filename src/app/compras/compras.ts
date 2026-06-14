import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compras.html',
  styleUrl: './compras.css'
})
export class Compras {

  compras: any[] = [];

  compra = {
    id: 0,
    producto: '',
    cantidad: 0,
    precio: 0,
    fecha: ''
  };

  guardar() {

    if (this.compra.id === 0) {

      const nuevaCompra = {
        ...this.compra,
        id: this.compras.length + 1
      };

      this.compras.push(nuevaCompra);

    } else {

      const index = this.compras.findIndex(
        c => c.id === this.compra.id
      );

      this.compras[index] = { ...this.compra };
    }

    this.limpiar();
  }

  editar(compra: any) {
    this.compra = { ...compra };
  }

  eliminar(id: number) {
    this.compras = this.compras.filter(
      c => c.id !== id
    );
  }

  limpiar() {
    this.compra = {
      id: 0,
      producto: '',
      cantidad: 0,
      precio: 0,
      fecha: ''
    };
  }
}