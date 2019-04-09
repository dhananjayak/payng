import { Component, OnInit } from '@angular/core';
import { months, yearsFromNow } from '../../utilities/date';

@Component({
    selector: 'cc-form',
    templateUrl: 'cc-form.component.html'
})
export class CreditCardForm implements OnInit {
    monthNames: string[];
    years: number[]

    ngOnInit(): void {
        this.monthNames = months();
        this.years = yearsFromNow(5);
    }
}