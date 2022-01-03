import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

interface Cliente {
  ticket: number;
  escritorio: number;
}

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styles: [],
})
export class EscritorioComponent implements OnInit {
  public escritorio!: number;

  cliente: Cliente = {
    ticket: 0,
    escritorio: 0,
  };

  clienteStatus: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private wsService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.escritorio = Number(this.route.snapshot.paramMap.get('id'));
  }

  atender() {
    let id = { id: this.escritorio };
    this.http
      .post('http://localhost:5500/atender', id)
      .subscribe((cliente: any) => {
        if (cliente.ticket) {
          this.clienteStatus = false;

          this.cliente = {
            ticket: cliente.ticket,
            escritorio: this.escritorio,
          };
          this.wsService.emit('atendiendo-cliente', this.cliente);
          console.log(this.cliente);
        } else {
          this.clienteStatus = true;
        }
      });
  }
}
