import { Routes } from '@angular/router';
import { Productos } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'nosotros',component:About},
    {path:'productos', component:Productos},
    {path:'contacto', component:Contact},
    {path:'**', redirectTo:''}
];
