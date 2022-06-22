import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './pages/base/base.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OurDumpstersComponent } from './pages/our-dumpsters/our-dumpsters.component';
import { QuoteComponent } from './pages/quote/quote.component';
import { RegisterComponent } from './pages/register/register.component';
import { WhyusComponent } from './pages/whyus/whyus.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'base', component: BaseComponent },
  { path: 'whyus', component: WhyusComponent },
  { path: 'ourdumpsters', component: OurDumpstersComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
