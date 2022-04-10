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
    console.log(r.value);
    this.service.login(r.value).subscribe(
      (data)=>{
        console.log(data);
      localStorage.setItem("idUtilisateur" ,data._id);
      localStorage.setItem("role" ,data.role);
      if(localStorage.getItem("role")==="client"){
        this.router.navigateByUrl("plats");
      }
      else if(localStorage.getItem("role")==="ekaly"){
        this.router.navigateByUrl("livreur");
      }
      else if(localStorage.getItem("role")==="restaurant"){
        this.router.navigateByUrl("beneficerestaurant");
      }
      else{

      }
    },
    (err)=>{
      console.log(err);
      this.router.navigateByUrl("/")
    }    );
  }

}
