import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Vivienda } from './models/vivienda.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Guardamos la respuesta original de la API
  private listadoCompleto: Vivienda[] = []; 
  
  // Lo que se muestra en la tabla
  listadoFiltrado: Vivienda[] = [];
  
  // El término que escribe el usuario
  searchTerm: string = '';
  
  seleccionada?: Vivienda;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getViviendas().subscribe({
      next: (res) => {
        this.listadoCompleto = res.slice(0, 15);
        this.listadoFiltrado = this.listadoCompleto;
      },
      error: (err) => console.error('Error al traer datos:', err)
    });
  }

  // Esta es la función que te faltaba
  filtrar() {
    const term = this.searchTerm.toLowerCase();
    
    this.listadoFiltrado = this.listadoCompleto.filter(obra => 
      obra.title.toLowerCase().includes(term) || 
      obra.id.toString().includes(term)
    );
  }

  verDetalle(obra: Vivienda) {
    this.seleccionada = obra;
  }
}