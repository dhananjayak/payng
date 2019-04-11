import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbButtonsModule, NgbModalModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CreditCardModal } from 'src/app/pay-by-cc/cc-modal/cc-modal.component';
import { CreditCardForm } from 'src/app/pay-by-cc/cc-form/cc-form.component';
import { PayDropDown } from 'src/app/shared/pay-dropdown/pay-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardModal,
    CreditCardForm,
    PayDropDown
  ],
  imports: [
    BrowserModule,
    NgbButtonsModule,
    NgbModalModule,
    NgbDropdownModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [CreditCardModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
