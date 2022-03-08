import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent } from './cover/cover.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WarningbarComponent } from './warningbar/warningbar.component';
import { ProcessbarComponent } from './processbar/processbar.component';
import { DumpstersbarComponent } from './dumpstersbar/dumpstersbar.component';
import { ContactComponent } from './contact/contact.component';
import { ProcessComponent } from './process/process.component';
import { DumpsterComponent } from './dumpster/dumpster.component';



@NgModule({
  declarations: [
    CoverComponent,
    NavbarComponent,
    WarningbarComponent,
    ProcessbarComponent,
    DumpstersbarComponent,
    ContactComponent,
    ProcessComponent,
    DumpsterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoverComponent,
    NavbarComponent,
    WarningbarComponent,
    ProcessbarComponent,
    DumpstersbarComponent,
    ProcessComponent,
    DumpsterComponent,
  ],
})
export class ComponentsModule { }
