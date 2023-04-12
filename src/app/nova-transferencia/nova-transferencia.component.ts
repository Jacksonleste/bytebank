import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  constructor(private transferenciaService: TransferenciaService,
    private route: Router) {}

  valor: number;
  destino: number;

  ngOnInit(): void {}

  novaTransferencia() {
    console.log('Nova solicitação!');

    const transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.transferenciaService.adicionar(transferencia).subscribe(
      (data) => {
        console.table(data);
        this.route.navigateByUrl('');
      },
      (error) => console.error(error)
    );
  }

  limpaForm() {
    this.valor = 0;
    this.destino = 0;
  }
}
