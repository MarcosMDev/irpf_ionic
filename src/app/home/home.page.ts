import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Pagador } from 'src/domain/model/pagador';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private pagador = new Pagador();

  constructor(private router: Router, private http: HttpClient) {}
  
  private calcular(): void {
    const body = {
      name: this.pagador.nome,
      value: this.pagador.ganhoAnual
    }

    this.http.post('http://localhost:3000/irpf', body).subscribe(pagador => {
      const option: NavigationExtras = { state: pagador }
      this.router.navigate(['result'], option)
    })
  }

}
