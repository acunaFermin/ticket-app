import { EventEmitter, Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Injectable({
	providedIn: "root",
})
export class WebsocketService extends Socket {
	nuevoCliente: EventEmitter<any> = new EventEmitter();
	ticketNuevo: EventEmitter<any> = new EventEmitter();
	clienteAtendido: EventEmitter<any> = new EventEmitter();

	constructor() {
		super({
			url: "https://tickets.acuna-fermin.dev/",
		});
		this.checkStatus();
		this.listen("cliente-conectado");
		this.listen("ticket-nuevo");
		this.listen("cliente-atendido");
	}

	public socketStatus = false;

	checkStatus() {
		this.ioSocket.on("connect", () => {
			console.log("conectado al servidor");
			this.socketStatus = true;
		});

		this.ioSocket.on("disconnect", () => {
			console.log("desconectado al servidor");
			this.socketStatus = false;
		});
	}

	emit(event: string, payload: any) {
		this.ioSocket.emit(event, payload);
	}

	listen = (evento: any) => {
		return this.ioSocket.on(evento, (msg: any) => {
			if (evento == "cliente-conectado") {
				this.nuevoCliente.emit(msg);
			}
			if (evento == "ticket-nuevo") {
				this.ticketNuevo.emit(msg);
			}

			if (evento == "cliente-atendido") {
				this.clienteAtendido.emit(msg);
			}
		});
	};
}
