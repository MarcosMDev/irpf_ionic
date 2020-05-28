import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Pagador } from 'src/app/domain/model/pagador';
import { Router, NavigationExtras } from '@angular/router';
import { HistoryRepository } from '../repositorys/history.repository';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private pagador = { nome: null, ganhoAnual: null } as Pagador

  constructor(private router: Router, private http: HttpClient, private repository: HistoryRepository) {}
  
  public goHistory(): void {
    this.router.navigate(['history'])
  }

  private calcular(): void {
    const body = {
      name: this.pagador.nome,
      value: this.pagador.ganhoAnual
    };

    this.http.post('http://localhost:3000/irpf', body).subscribe(pagador => {
      this.repository.save(pagador)
      const option: NavigationExtras = { state: pagador }
      this.router.navigate(['result'], option)
    })
  }

}
