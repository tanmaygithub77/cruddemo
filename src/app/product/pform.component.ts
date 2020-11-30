import { Component, Output,SimpleChanges,EventEmitter, Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
selector:"pform",
templateUrl:"./pform.component.html",
styleUrls:["./pform.component.css"]

})
export class PformComponent{
    constructor(private pservice:ProductService){

    }
pid:number=0;
pname:string="";
price:number=0;
@Input("upprod")prod:Product;
@Output() myevent=new EventEmitter();
//this gets called every time when any input property changes
ngOnChanges(change:SimpleChanges){
 console.log(change);
if(change["prod"].currentValue!=change["prod"].previousValue){
this.pid=this.prod.pid;
this.pname=this.prod.pname;
this.price=this.prod.price;

}

}
addproduct(){

    let p=new Product(this.pid,this.pname,this.price)
    console.log(p);
    this.pservice.addproduct(p);
    this.pid=0;
    this.pname="";
    this.price=0;
    this.myevent.emit(false);

}
updateproduct(){
    let p=new Product(this.pid,this.pname,this.price);
    console.log(p);
    this.pservice.updateproduct(p);
    this.pid=0;
    this.pname="";
    this.price=0;
    this.myevent.emit(false);
}
}