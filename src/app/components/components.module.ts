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
import { RouterModule } from '@angular/router';
import { ReasonComponent } from './reason/reason.component';
import { OurDumpsterItemComponent } from './our-dumpster-item/our-dumpster-item.component';
import { OurDumpsterContainerComponent } from './our-dumpster-container/our-dumpster-container.component';
import { ButtonComponent } from './button/button.component';
import { RoundButtonComponent } from './round-button/round-button.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextInputComponent } from './text-input/text-input.component';
import { TextLabelComponent } from './text-label/text-label.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { QuoteResultComponent } from './quote-result/quote-result.component';
import { ResponsiveRowComponent } from './responsive-row/responsive-row.component';
import { BackgroundComponent } from './background/background.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { MenuComponent } from './menu/menu.component';


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
    ReasonComponent,
    OurDumpsterItemComponent,
    OurDumpsterContainerComponent,
    ButtonComponent,
    RoundButtonComponent,
    DateRangeComponent,
    TextInputComponent,
    TextLabelComponent,
    FormContainerComponent,
    SectionTitleComponent,
    MapContainerComponent,
    QuoteResultComponent,
    ResponsiveRowComponent,
    BackgroundComponent,
    ErrorMessageComponent,
    MenuComponent,
  ],
  imports: [CommonModule, RouterModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule],
  exports: [
    CoverComponent,
    NavbarComponent,
    WarningbarComponent,
    ProcessbarComponent,
    DumpstersbarComponent,
    ProcessComponent,
    DumpsterComponent,
    ContactComponent,
    ReasonComponent,
    OurDumpsterItemComponent,
    OurDumpsterContainerComponent,
    ButtonComponent,
    RoundButtonComponent,
    DateRangeComponent,
    TextInputComponent,
    TextLabelComponent,
    FormContainerComponent,
    SectionTitleComponent,
    MapContainerComponent,
    QuoteResultComponent,
    ResponsiveRowComponent,
    BackgroundComponent,
    ErrorMessageComponent,
    MenuComponent
  ],
})
export class ComponentsModule { }
