import { Component, OnInit } from '@angular/core';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  columnDefs = [
    {
      field: "productName",
      sortable: true,
      filter: true
    },
    { field: "link", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
    { field: "stock", sortable: true, filter: true }

  ];

rowData =[]

modules = AllCommunityModules;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.getUserStock().subscribe((res)=>{
      console.log("Done!!!!!!!!!",res);
      this.rowData=res;
    })

  }

}
