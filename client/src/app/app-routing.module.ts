import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ProductComponent } from "./product/product.component";
import { ProductCardsComponent } from './product-cards/product-cards.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "products", component: ProductComponent },
  {path:"product-cards",component:ProductCardsComponent},
  {
    path: "**",
    redirectTo: "login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
