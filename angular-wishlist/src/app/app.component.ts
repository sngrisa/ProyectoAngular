import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent {
  title = 'Angular-WhishList';
  time = new Observable(observer =>{
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  Agregar(titulo: HTMLInputElement){
    console.log(titulo.value);
    }

    destinoAgregado(d){
      alert(d.nombre);
    }
}

