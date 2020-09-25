import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listadeejemplo',
  templateUrl: './listadeejemplo.component.html',
  styleUrls: ['./listadeejemplo.component.css']
})
export class ListadeejemploComponent implements OnInit {
  ciudades = ['Cordoba',' Rosario',' Buenos Aires',' Usuahia'];
  constructor() { }
  ngOnInit(){
  }

}
