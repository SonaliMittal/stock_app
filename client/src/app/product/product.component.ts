import { Component, OnInit, ViewChild } from "@angular/core";
import { AllCommunityModules } from "@ag-grid-community/all-modules";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";
import { AuthService } from "../auth.service";
import { AgGridAngular } from "@ag-grid-community/angular";
import { EmitterVisitorContext } from "@angular/compiler";
import { Router } from '@angular/router';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @ViewChild("agG", { read: "", static: true }) agG: AgGridAngular;
  columnDefs = [
    {
      field: "productName",
      sortable: true,
      filter: true,
      checkboxSelection: true
    },
    { field: "link", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
    { field: "stock", sortable: true, filter: true }

  ];

  rowData: any;
  selectedData=[];
  constructor(private authService: AuthService,private router: Router) {
  }

  ngOnInit() {
    localStorage.removeItem('products');

    this.authService.getProducts().subscribe(data => {
      this.rowData = data;
    });
  }

  modules = AllCommunityModules;

   getSelectedRows() {
    const selectedNodes =   this.agG.api.getSelectedNodes();

    this.selectedData = selectedNodes.map( node => node.data );
   console.log("selectedData",this.selectedData);
   localStorage.setItem('products',JSON.stringify(this.selectedData));
    this.router.navigate(['/product-cards']);
   }

}
