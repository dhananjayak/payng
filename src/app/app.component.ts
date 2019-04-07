import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreditCardModal } from 'src/app/pay-by-cc/cc-modal/cc-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payng';

  constructor(private modalService: NgbModal){

  }

  openCC(): void {
    this.modalService.open(CreditCardModal);
  }

}
