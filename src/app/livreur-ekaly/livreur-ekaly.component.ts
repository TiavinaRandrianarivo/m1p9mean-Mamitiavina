import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InscriptionServiceService } from '../inscription-service.service';

@Component({
  selector: 'app-livreur-ekaly',
  templateUrl: './livreur-ekaly.component.html',
  styleUrls: ['./livreur-ekaly.component.scss']
})
export class LivreurEkalyComponent implements OnInit {

  livreurs = new BehaviorSubject<any>([]);
  constructor(private service: InscriptionServiceService) { }

  ngOnInit(): void {
    this.service.list("livreur").subscribe(
      (data)=>{
        this.livreurs.next(data);
      },
      (err)=>{
       // console.log(err);
      }
      
    );

    console.log(this.livreurs.value);
    //console.log("livreur",this.livreurs);

  }

  onAivalable(){

  }

}
