import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'cc-modal',
    templateUrl: 'cc-modal.component.html'
})
export class CreditCardModal {
    disableOk : boolean = true;
    constructor(public activeModal: NgbActiveModal){

    }

    enableOkBtn(enable: boolean): void {
        this.disableOk = !enable;
    }
}