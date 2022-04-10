import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutLivreurCommandeComponent } from './ajout-livreur-commande/ajout-livreur-commande.component';
import { BeneficeListRestaurantComponent } from './benefice-list-restaurant/benefice-list-restaurant.component';
import { CommandeListEkalyComponent } from './commande-list-ekaly/commande-list-ekaly.component';
import { CommandeListRestaurantComponent } from './commande-list-restaurant/commande-list-restaurant.component';
import { CommandedetailListEkalyComponent } from './commandedetail-list-ekaly/commandedetail-list-ekaly.component';
import { LivreurListEkalyComponent } from './livreur-list-ekaly/livreur-list-ekaly.component';
import { LoginComponent } from './login/login.component';
import { PanierListComponent } from './panier-list/panier-list.component';
import { PlatsListComponent } from './plats-list/plats-list.component';
import { PlatsVisibleListRestaurantComponent } from './plats-visible-list-restaurant/plats-visible-list-restaurant.component';
import { RestaurantListEkalyComponent } from './restaurant-list-ekaly/restaurant-list-ekaly.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'plats', component: PlatsListComponent },
  {path: 'panier', component: PanierListComponent },
  {path: 'commanderestaurant', component: CommandeListRestaurantComponent },
  {path: 'platsvisiblerestaurant', component: PlatsVisibleListRestaurantComponent },
  {path: 'beneficerestaurant', component: BeneficeListRestaurantComponent },
  {path: 'commandeekaly', component: CommandeListEkalyComponent },
  {path: 'commandedetailekaly', component: CommandedetailListEkalyComponent },
  {path: 'ajoutlivreur', component: AjoutLivreurCommandeComponent },
  {path: 'livreur', component: LivreurListEkalyComponent},
  {path: 'restaurant', component: RestaurantListEkalyComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
