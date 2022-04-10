import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menu!:any[];
  role!:string;

  constructor() { }

  ngOnInit(): void {
    this.role = "client";
    //this.menu = this.getMenuList(this.role); 
  }
  
  /*getMenuList(role:string):any[]{
    result:any[];
    if(role==="client"){

    }else if(role==="ekaly"){

    }else if(role==="restaurant"){

    }else{

    }
    return result;
  }*/

}
