import { Injectable } from '@angular/core';
import { Alerta } from '../model/alerta';
import swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class AlertaService {
    constructor() { }

    public emiteAdvertencia(msj: Alerta): void {

        swal.fire(msj.title, msj.message, 'warning');
    }

    public emiteError(msj: Alerta): void {

        swal.fire(msj.title, msj.message, 'error');
    }

    public emiteinfo(msj: Alerta): void {

        swal.fire(msj.title, msj.message, 'info');
    }
}