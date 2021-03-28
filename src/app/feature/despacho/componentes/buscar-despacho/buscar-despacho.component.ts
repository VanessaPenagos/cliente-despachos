import { Component, OnInit } from '@angular/core';
import { Despacho } from 'src/app/feature/despacho/shared/model/despacho';
import { DespachoService } from 'src/app/feature/despacho/shared/service/despacho.service';

@Component({
  selector: 'app-buscar-despacho',
  templateUrl: './buscar-despacho.component.html',
  styleUrls: ['./buscar-despacho.component.css']
})
export class BuscarDespachoComponent implements OnInit {

  public despacho: Despacho = new Despacho();


  constructor(protected despachoService: DespachoService) { }

  ngOnInit(): void {
    
  }


  

}
