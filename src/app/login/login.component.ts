import { Component, OnInit } from '@angular/core';
import { InscriptionServiceService } from '../inscription-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  utilisateur:any;

  constructor(private service: InscriptionServiceService ,private router: Router) { }

  ngOnInit(): void {
  }

  onSignIn(r:any){
    this.utilisateur = this.service.login(r);
  }

}
