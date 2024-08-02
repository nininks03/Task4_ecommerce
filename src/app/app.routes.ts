import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"products",component:ProductComponent},
    {path:"contact_us",component:ContactUsComponent},
    {path:"products/:id",component:ProductViewComponent},
    {path:"login",component:LoginComponent},
    
];
