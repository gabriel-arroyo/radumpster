import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule} from '../components/components.module';
import { BaseComponent } from './base/base.component';
import { WhyusComponent } from './whyus/whyus.component';
import { OurDumpstersComponent } from './our-dumpsters/our-dumpsters.component';
import { QuoteComponent } from './quote/quote.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    HomeComponent,
    BaseComponent,
    WhyusComponent,
    OurDumpstersComponent,
    QuoteComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, ComponentsModule, FormsModule, ReactiveFormsModule],
})
export class PagesModule {}
