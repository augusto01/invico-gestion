import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Vivienda } from './models/vivienda.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listado: Vivienda[] = [];
  seleccionada?: Vivienda;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getViviendas().subscribe(res => {
      this.listado = res.slice(0, 15); // Traemos 15 obras para la demo
    });
  }

  verDetalle(obra: Vivienda) {
    this.seleccionada = obra;
  }
}