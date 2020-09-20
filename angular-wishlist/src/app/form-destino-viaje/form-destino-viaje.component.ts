import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { fromEvent, pipe } from 'rxjs';
import { ViajeDestino } from '../models/viaje-destino.model';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ajax, AjaxResponse } from 'rxjs/ajax';


@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})

export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<ViajeDestino>;
  fg: FormGroup;
  minLongitud = 3;
  searchResults: string [];
  constructor(private fb: FormBuilder) { 
    //inicializar
    this.minLongitud = 3;
    this.onItemAdded = new EventEmitter();
    //vinculacion con tag html
    this.fg = this.fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        this.nombreValidator,
        this.nombreValidatorParametrizable(this.minLongitud),
      ])],
      url: ['', Validators.compose([
        Validators.required,
        this.UrlValidator,
        this.UrlValidatorParametrizable(this.minLongitud),
      ])]
    });
    
    //observador de tipeo
    this.fg.valueChanges.subscribe((form: any) =>{
      console.log('cambio el formulario: ', form);
    })
  }

  ngOnInit(){
    let elemNombre = <HTMLInputElement>document.getElementById('nombre');
    fromEvent(elemNombre, 'input')
      .pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter(text => text.length > 2),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(() => ajax('/assets/datos.json'))
    ).subscribe(ajaxResponse => {
      this.searchResults = ajaxResponse.response;
      console.log(ajaxResponse),
      console.log(ajaxResponse.response)
    });
  }

  guardar(nombre: string, url: string): boolean {
    const d = new ViajeDestino(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }
  
  nombreValidator(control: FormControl): {[s: string]: boolean}{
  let l =control.value.toString().trim().length;
  if( l > 0 && l < 5 ){
    return { invalidNombre: true};
  }
     return null;
  }

  nombreValidatorParametrizable(minLong: number): ValidatorFn {
    return (control: FormControl): {[s: string]: boolean} | null => {
      let l =control.value.toString().trim().length;
      if( l > 0 && l <minLong){
        return { minLongNombre: true};
      }
      return null;
    }

  }

  UrlValidator(control: FormControl): {[s: string]: boolean}{
    let l =control.value.toString().trim().length;
    if( l > 0 && l < 5 ){
      return { invalidUrl: true};
    }
       return null;
    }

    UrlValidatorParametrizable(minLong: number): ValidatorFn {
      return (control: FormControl): {[s: string]: boolean} | null => {
        let l =control.value.toString().trim().length;
        if( l > 0 && l <minLong){
          return { minLongUrl: true};
        }
        return null;
      }
  
    }
}
