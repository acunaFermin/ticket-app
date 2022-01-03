import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  entrar(numero: string) {
    if (!numero) {
      return;
    }

    let num = Number(numero);

    this.router.navigate(['/escritorio', num]);
  }
}
