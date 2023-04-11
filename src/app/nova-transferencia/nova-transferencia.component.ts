import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  constructor() {}

  @Output() onNewTransfer = new EventEmitter<any>();

  valor: number;
  destino: number;

  ngOnInit(): void {}

  novaTransferencia() {
    console.log('Nova solicitação!');

    const transferencias = {
      valor: this.valor,
      destino: this.destino,
    };

    this.onNewTransfer.emit(transferencias);
    this.limpaForm();
  }

  limpaForm() {
    this.valor = 0;
    this.destino = 0;
  }
}
