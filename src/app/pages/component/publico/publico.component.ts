import { Component, OnDestroy, OnInit } from "@angular/core";
import { Cliente } from "src/app/interfaces/cliente";
import { WebsocketService } from "src/app/services/websocket.service";

@Component({
	selector: "app-publico",
	templateUrl: "./publico.component.html",
	styles: [],
})
export class PublicoComponent implements OnInit, OnDestroy {
	clienteActual: Cliente = {
		ticket: 0,
		escritorio: 0,
	};

	cliente1: Cliente = {
		ticket: 0,
		escritorio: 0,
	};

	cliente2: Cliente = {
		ticket: 0,
		escritorio: 0,
	};

	cliente3: Cliente = {
		ticket: 0,
		escritorio: 0,
	};

	constructor(private wsService: WebsocketService) {}

	ngOnInit(): void {
		const body = document.getElementsByTagName("body")[0];
		body.classList.remove("container", "mt-5");

		this.wsService.clienteAtendido.subscribe((cliente: Cliente) => {
			const audio = new Audio();
			audio.src = "assets/audio/new-ticket.mp3";
			audio.load();
			audio.play();

			this.clienteActual = {
				ticket: cliente.ticket,
				escritorio: cliente.escritorio,
			};

			if (cliente.escritorio == 1) {
				this.cliente1.ticket = cliente.ticket;
			}

			if (cliente.escritorio == 2) {
				this.cliente2.ticket = cliente.ticket;
			}

			if (cliente.escritorio == 3) {
				this.cliente3.ticket = cliente.ticket;
			}
		});
	}

	ngOnDestroy(): void {
		const body = document.getElementsByTagName("body")[0];
		body.classList.add("container", "mt-5");
	}
}
