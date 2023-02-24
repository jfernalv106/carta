import { Component } from '@angular/core';
import { Categoria, Menu } from 'src/app/interfaces';
import { CartaService } from '../carta.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
})
export class CartaComponent {
  categorias: string[] = [];
  categoria:string='';
  menu: Menu = { fotos: [] };
  menus: Menu[] = [];
  constructor(private cartaService: CartaService) {
    this.cartaService.buscarCategoria('Menu').subscribe(
      (ct) => {
        if (ct.categorias.length > 0) {
          ct.categorias.forEach((c) => {
            this.categorias.push(c.categoria ?? '');
          });
        }
      },
      (err) => {
        this.categorias = [];
      }
    );
    this.buscar();
  }
  buscar(){
    this.cartaService.buscarMenu(this.categoria).subscribe(
      (ct) => {
     this.menus=ct.menu;
      },
      (err) => {
        this.menus = [];
      }
    );
  }
  cargaCategoria(categoria:string){
this.categoria=categoria;
this.buscar();
  }
}
