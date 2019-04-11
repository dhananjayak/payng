import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

import { months, yearsFromNow } from '../../utilities/date';
import { CreditCardFormBuilder } from '../services/cc-form-builder.service';
import { isValid } from 'src/app/pay-by-cc/validations/cc.validation';

@Component({
    selector: 'cc-form',
    templateUrl: 'cc-form.component.html'
})
export class CreditCardForm implements OnInit {
    ccform: FormGroup;
    monthNames: string[];
    years: number[]

    constructor(private fb: CreditCardFormBuilder){
        this.ccform = fb.build();
    }

    ngOnInit(): void {
        this.monthNames = months();
        this.years = yearsFromNow(5);

        this.ccform.get('number')
              .valueChanges
              .pipe(map(isValid))
              .subscribe(console.log);

        this.ccform.valueChanges
            .pipe(map(v => [v, this.ccform.valid]))
            .subscribe(console.log);
    }
}