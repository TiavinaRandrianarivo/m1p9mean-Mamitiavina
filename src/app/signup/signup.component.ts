import { Component, OnInit } from '@angular/core';
import { InscriptionServiceService } from '../inscription-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  role!: string;
  etat!: string;

  constructor(private service: InscriptionServiceService ,private router: Router) { }

  ngOnInit(): void {
    this.role = "client";
    this.etat = "disponible"
  }

  onRegistrer(r:any){
    r.value.role = this.role;
    r.value.etat = this.etat;
    this.service.inscription(r.value).subscribe((error:any)=>{
      alert(error);
      /*if(error){
        
      }
      else{
        this.router.navigateByUrl('plats');
      }*/
    },(result:any)=>{

    });
  }

}
