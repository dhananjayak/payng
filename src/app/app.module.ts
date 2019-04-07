import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbButtonsModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CreditCardModal } from 'src/app/pay-by-cc/cc-modal/cc-modal.component';
import { CreditCardForm } from 'src/app/pay-by-cc/cc-form/cc-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardModal,
    CreditCardForm
  ],
  imports: [
    BrowserModule,
    NgbButtonsModule,
    NgbModalModule
  ],
  providers: [],
  entryComponents: [CreditCardModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
