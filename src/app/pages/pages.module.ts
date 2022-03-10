import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule} from '../components/components.module';
import { BaseComponent } from './base/base.component';
import { WhyusComponent } from './whyus/whyus.component'



@NgModule({
  declarations: [
    HomeComponent,
    BaseComponent,
    WhyusComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
