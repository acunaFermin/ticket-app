import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { WebsocketService } from "src/app/services/websocket.service";

@Component({
	selector: "app-nuevo-ticket",
	templateUrl: "./nuevo-ticket.component.html",
	styles: [],
})
export class NuevoTicketComponent implements OnInit {
	ticket: number = 0;

	constructor(
		private http: HttpClient,
		private wsService: WebsocketService
	) {}

	ngOnInit(): void {
		this.generarTicket();
		this.wsService.ticketNuevo.subscribe(
			(ticket) => (this.ticket = ticket)
		);
	}

	generarTicket() {
		this.http
			.get<number>("https://tickets.acuna-fermin.dev/generarticket")
			.subscribe((ticket) => {
				this.ticket = ticket;
				this.wsService.emit("nuevo-ticket", this.ticket);
			});
	}
}
