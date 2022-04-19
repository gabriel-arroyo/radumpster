import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './pages/base/base.component';
import { HomeComponent } from './pages/home/home.component';
import { OurDumpstersComponent } from './pages/our-dumpsters/our-dumpsters.component';
import { WhyusComponent } from './pages/whyus/whyus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'base', component: BaseComponent },
  { path: 'whyus', component: WhyusComponent },
  { path: 'ourdumpsters', component: OurDumpstersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
