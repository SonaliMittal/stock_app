import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { ProductComponent } from "../product/product.component";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-product-cards",
  templateUrl: "./product-cards.component.html",
  styleUrls: ["./product-cards.component.scss"]
})
export class ProductCardsComponent implements OnInit {
  selectedProducts: any;
  productItems:any;
  @ViewChild(ProductComponent, { static: false }) child: ProductComponent;

  constructor(private authService:AuthService,private router:Router) {}

  ngOnInit() {
    this.selectedProducts = JSON.parse(localStorage.getItem("products"));

    this.selectedProducts=this.selectedProducts.map(d=>{
      d['totalItems']=0
      return d;
    })
    console.log("this.selectedProducts",this.selectedProducts);
    
  }
  increaseValue(product) {
    let pr=this.selectedProducts.map((p)=>{
        if( p._id===product._id){
          p.totalItems=p.totalItems + 1;
        }
        return p;
    })
  
    this.selectedProducts=pr; 
  }

  decreaseValue(product) {

    let pr=this.selectedProducts.map((p)=>{
      if( p._id===product._id){
        p.totalItems=p.totalItems - 1;
      }
      return p;
  })

  this.selectedProducts=pr; 
  }

  buyProduct(){

    this.router.navigate(['/portfolio']);
    this.authService.buy(this.selectedProducts).subscribe(()=>{
      console.log("done!!!!");
      
    })
  }
}
