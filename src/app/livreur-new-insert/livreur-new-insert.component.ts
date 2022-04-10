import { Component, OnInit } from '@angular/core';
import { InscriptionServiceService } from '../inscription-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livreur-new-insert',
  templateUrl: './livreur-new-insert.component.html',
  styleUrls: ['./livreur-new-insert.component.scss']
})
export class LivreurNewInsertComponent implements OnInit {

  role!: string;
  etat!: string;
  error!: string;

  constructor(private service: InscriptionServiceService ,private router: Router) { }

  ngOnInit(): void {
    this.role = "livreur";
    this.etat = "aivalable"
  }

  onRegistrer(r:any){
    r.value.role = this.role;
    r.value.etat = this.etat;
    this.service.inscription(r.value).subscribe((err)=>{
      alert(err);
    });
   
    this.router.navigateByUrl('livreur');
  }

}
