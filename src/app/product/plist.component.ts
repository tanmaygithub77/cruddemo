import { Component,OnInit} from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from '../product.service';
@Component({
selector:"plist",
templateUrl:"./plist.component.html",
styleUrls:["./plist.component.css"]

})
export class PlistComponent implements OnInit{
    parr:Product[];
  
    constructor(private pservice:ProductService){
        console.log("plist comtr called");

    }
    ngOnInit(){

            console.log("ngInit plist called");
            this.parr=this.pservice.getAllProduct();
    }
   
}