import { Component, OnInit } from '@angular/core';
import { InscriptionServiceService } from '../inscription-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plats-insert',
  templateUrl: './plats-insert.component.html',
  styleUrls: ['./plats-insert.component.scss']
})
export class PlatsInsertComponent implements OnInit {

  constructor(private service: InscriptionServiceService ,private router: Router) { }
  idUtilisateur!:any;
  etat!:string;

  ngOnInit(): void {
    this.idUtilisateur = localStorage.getItem("idUtilisateur");
    this.etat = "Aivalable";
  }

  addProduct(r:any){
    r.value.idUtilisateur = this.idUtilisateur;
    r.value.etat = this.etat;
    this.service.insertplat(r.value).subscribe((err)=>{
      alert(err);
    });
   
    this.router.navigateByUrl('beneficerestaurant');
  }

}
