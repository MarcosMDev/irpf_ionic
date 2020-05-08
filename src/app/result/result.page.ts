import { Component, OnInit } from '@angular/core';
import { Pagador } from 'src/domain/model/pagador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage {

  private pagador: Pagador;

  constructor(router: Router) { 
    this.pagador = router.getCurrentNavigation().extras.state as Pagador;
  }
  
}
