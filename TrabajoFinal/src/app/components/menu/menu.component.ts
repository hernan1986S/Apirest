import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  wines = [
    {id: 1, name: 'Luigi Bosca Malbec'},
    {id: 2, name: 'Luigi Bosca Cabernet Sauvignon'},
    {id: 3, name: 'Luigi Bosca Merlot'},
    {id: 4, name: 'Luigi Bosca Pinot Noir'},
    {id: 5, name: 'Luigi Bosca de Sangre'},
    {id: 6, name: 'Luigi Bosca D.O.C'},
    {id: 7, name: 'Rutini malbec'},
    {id: 8, name: 'Rutini Cabernet Sauvignon'},
    {id: 9, name: 'Rutini Merlot'},
    {id: 10, name: 'Rutini Pinot Noir'},
    {id: 11, name: 'Rutini Malbec-Malbec'},
    {id: 12, name: 'Rutini Malbec-Merlot'},
    {id: 13, name: 'Alma Mora Malbec'},
    {id: 14, name: 'Alma Mora Cabernet Sauvignon'},
    {id: 15, name: 'Alma Mora Reserva Malbec'},
    {id: 16, name: 'Cordero Piel De Lobo'},
    {id: 17, name: 'Perro Callejero Malbec'},
    {id: 18, name: 'Sapo de otro Pozo'},
    {id: 19, name: 'Mosquita Muerta'},
    {id: 20, name: 'Nicassia Malbec'},
    {id: 21, name: 'Salentein Reserva malbec'},
    {id: 22, name: 'Don David Malbec'},
    {id: 23, name: 'Don Dabid Cabernet Sauvignon'},
    {id: 24, name: 'Los Intocables Malbec'},
  ]

  constructor() { }

  ngOnInit(): void {}


}
