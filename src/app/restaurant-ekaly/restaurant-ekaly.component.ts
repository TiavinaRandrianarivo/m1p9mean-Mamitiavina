import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InscriptionServiceService } from '../inscription-service.service';

@Component({
  selector: 'app-restaurant-ekaly',
  templateUrl: './restaurant-ekaly.component.html',
  styleUrls: ['./restaurant-ekaly.component.scss']
})
export class RestaurantEkalyComponent implements OnInit {

  restaurants = new BehaviorSubject<any>([]);
  constructor(private service: InscriptionServiceService) { }

  ngOnInit(): void {
    this.service.list("restaurant").subscribe(
      (data)=>{
        this.restaurants.next(data);
      },
      (err)=>{
       // console.log(err);
      }
      
    );

    console.log(this.restaurants.value);


  }

  onAivalable(){

  }
}
