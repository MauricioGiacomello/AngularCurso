import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-ng-for',
  templateUrl: './ng-if-ng-for.component.html',
  styleUrls: ['./ng-if-ng-for.component.css']
})
export class NgIfNgForComponent implements OnInit {

  numero: number = 0;
  arrNumeros: Array<any> = [1, 2, 3, 4, 5, 6];
  constructor() { }

  ngOnInit(): void {
  }

  obterNumero(numero_: any) {

    this.numero = numero_.value
  }

}
