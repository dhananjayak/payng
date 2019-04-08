import { Component, OnInit } from '@angular/core';
import { months } from '../../utilities/date';

@Component({
    selector: 'cc-form',
    templateUrl: 'cc-form.component.html'
})
export class CreditCardForm implements OnInit {
    monthNames: string[];

    ngOnInit(): void {
        this.monthNames = months();
    }
}