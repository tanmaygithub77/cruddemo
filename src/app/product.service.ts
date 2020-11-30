import { ElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';

import{Product} from './product.model';

@Injectable()
export class ProductService{
    parr=[new Product(12,"lays",12),
    new Product(13,"balaji",15),
    new Product(14,"kurkure",20)
    ];

    getAllProduct():Product[]
    {
       return this.parr; 
    
    }

    addproduct(p:Product){
this.parr.push(p);



    }

    updateproduct(p:Product){
for(let i=0;i<this.parr.length;i++){
if(this.parr[i].pid==p.pid){
    this.parr[i].pname=p.pname;
    this.parr[i].price=p.price;
    break;  
}
}

    }

    deleteproduct(p:Product){
        for(let i=0;i<this.parr.length;i++){
            if(this.parr[i].pid==p.pid){
              this.parr.splice(i,1);//it will delete one object 
                break;  
    }

}
    }
}