import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { PlatsComponent } from './plats/plats.component';
import { PlatsListComponent } from './plats-list/plats-list.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { PanierComponent } from './panier/panier.component';
import { PanierListComponent } from './panier-list/panier-list.component';
import { CommandeListRestaurantComponent } from './commande-list-restaurant/commande-list-restaurant.component';
import { CommandeRestaurantComponent } from './commande-restaurant/commande-restaurant.component';
import { PlatsVisibleRestaurantComponent } from './plats-visible-restaurant/plats-visible-restaurant.component';
import { PlatsVisibleListRestaurantComponent } from './plats-visible-list-restaurant/plats-visible-list-restaurant.component';
import { BeneficeRestaurantComponent } from './benefice-restaurant/benefice-restaurant.component';
import { BeneficeListRestaurantComponent } from './benefice-list-restaurant/benefice-list-restaurant.component';
import { PlatsInsertComponent } from './plats-insert/plats-insert.component';
import { CommandeEkalyComponent } from './commande-ekaly/commande-ekaly.component';
import { CommandeListEkalyComponent } from './commande-list-ekaly/commande-list-ekaly.component';
import { CommandedetailEkalyComponent } from './commandedetail-ekaly/commandedetail-ekaly.component';
import { CommandedetailListEkalyComponent } from './commandedetail-list-ekaly/commandedetail-list-ekaly.component';
import { AjoutLivreurCommandeComponent } from './ajout-livreur-commande/ajout-livreur-commande.component';
import { LivreurEkalyComponent } from './livreur-ekaly/livreur-ekaly.component';
import { LivreurListEkalyComponent } from './livreur-list-ekaly/livreur-list-ekaly.component';
import { LivreurNewInsertComponent } from './livreur-new-insert/livreur-new-insert.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantEkalyComponent } from './restaurant-ekaly/restaurant-ekaly.component';
import { RestaurantNewInsertComponent } from './restaurant-new-insert/restaurant-new-insert.component';
import { RestaurantListEkalyComponent } from './restaurant-list-ekaly/restaurant-list-ekaly.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    PlatsComponent,
    PlatsListComponent,
    HeaderComponent,
    PaginationComponent,
    MenuListComponent,
    PanierComponent,
    PanierListComponent,
    CommandeListRestaurantComponent,
    CommandeRestaurantComponent,
    PlatsVisibleRestaurantComponent,
    PlatsVisibleListRestaurantComponent,
    BeneficeRestaurantComponent,
    BeneficeListRestaurantComponent,
    PlatsInsertComponent,
    CommandeEkalyComponent,
    CommandeListEkalyComponent,
    CommandedetailEkalyComponent,
    CommandedetailListEkalyComponent,
    AjoutLivreurCommandeComponent,
    LivreurEkalyComponent,
    LivreurListEkalyComponent,
    LivreurNewInsertComponent,
    RestaurantEkalyComponent,
    RestaurantNewInsertComponent,
    RestaurantListEkalyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
