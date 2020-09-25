import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasApiClientService {

  constructor() { }

  getAll() {
    return [
            { id: 1, name: 'Reservación tentativa: serán las reservas que son solicitadas sin ofrecer ninguna seguridad para llevarlas a cabo.' }
          , {id: 2, name: 'Reservación Límite: se les marcara una hora límite de llegada, teniendo el hotel la libertad de acortarlo o alargarlo según sus propias necesidades.' },
            {id: 3, name: 'Reservación Garantizada: son reservaciones contactadas a través de una agencia de viajes, línea aérea o asesoría de grupos y convenciones, y que están garantizadas por medio de un cupón u orden de cambio.'},
            {id: 4, name: 'Reservación con Depósito: son aquellas en las que los clientes han mandado el pago de por lo menos una noche, en el plan que el huésped considere más apropiado para cubrir sus necesidades.'},
            {id: 5, name: 'Reservación de Grupo ( fija y diferida): son aquellas reservaciones mayores de diez habitaciones, en la misma fecha y con características similares.'},
            {id: 6, name: 'Allotment: son reservaciones especiales y globales que se realiza con las agencias de viajes y las lineas que se han identificado como buenos proveedores del hotel. es un contrato que tiene como finalidad asegurar a una empresa un determinado número de habitaciones para su venta particular y se asegura de que estos cuartos sean vendidos.'},
            {id: 7, name: 'Reservación Negada: es aquella que no fue posible aceptar, aun después de haberla colocado en la lista de espera. Se debe actuar con mucha diplomacia explicandole al cliente porque no fue posible atenderlo en ese momento.'},
            {id: 8, name: 'Reservación Cancelada: puede obedecer a dos causas a que el cliente nos cancele directamente o por medio de su intercambio o que el hotel se vea obligado a cancelar por falta de espacio o por alguna causa especial.'},
            {id: 9, name: 'Cambio de reservación: puede haber ocasiones en que nos vemos precisados a efectuar en una reservación, ya que los clientes por distintas razones así lo solicitan.'},];
  }
}
