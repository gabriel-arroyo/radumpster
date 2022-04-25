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
import {RouterModule} from '@angular/router';
import { QuotebarComponent } from './quotebar/quotebar.component';
import { ReasonComponent } from './reason/reason.component';
import { OurDumpsterItemComponent } from './our-dumpster-item/our-dumpster-item.component';
import { OurDumpsterContainerComponent } from './our-dumpster-container/our-dumpster-container.component';


@NgModule({
  declarations: [
    CoverComponent,
    NavbarComponent,
    WarningbarComponent,
    ProcessbarComponent,
    DumpstersbarComponent,
    ProcessComponent,
    DumpsterComponent,
    ContactComponent,
    QuotebarComponent,
    ReasonComponent,
    OurDumpsterItemComponent,
    OurDumpsterContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CoverComponent,
    NavbarComponent,
    WarningbarComponent,
    ProcessbarComponent,
    DumpstersbarComponent,
    ProcessComponent,
    DumpsterComponent,
    ContactComponent,
    QuotebarComponent,
    ReasonComponent,
    OurDumpsterItemComponent,
    OurDumpsterContainerComponent,
  ],
})
export class ComponentsModule { }
