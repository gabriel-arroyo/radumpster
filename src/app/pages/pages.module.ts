import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule} from '../components/components.module';
import { BaseComponent } from './base/base.component'



@NgModule({
  declarations: [
    HomeComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
