import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  numero: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  obterNumero(numero_: any) {

    this.numero = numero_.value
  }
}
