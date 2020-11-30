import { Component } from '@angular/core';
import {Product} from "../product.model"
import { ProductService } from '../product.service';

@Component({
selector:"ptab",
templateUrl:"./ptab.component.html",
styleUrls:["./ptab.component.css"]


})

export class PtabComponent{
parr:Product[];
pob:Product;
flag=false;
constructor(private pservice:ProductService){

}
ngOnInit(){
    this.parr=this.pservice.getAllProduct();
}
updateproduct(p:Product){
    this.flag=true;
    this.pob=p;
}

deleteproduct(p:Product){
    this.pservice.deleteproduct(p);
}

displayform(){
    this.flag=true;
}
}