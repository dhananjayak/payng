import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, tap, distinctUntilChanged } from 'rxjs/operators';

import { months, yearsFromNow } from '../../utilities/date';
import { CreditCardFormBuilder } from '../services/cc-form-builder.service';
import { isValid } from 'src/app/pay-by-cc/validations/cc.validation';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
    selector: 'cc-form',
    templateUrl: 'cc-form.component.html'
})
export class CreditCardForm implements OnInit {
    @Output() validityChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    ccform: FormGroup;
    monthNames: string[];
    years: number[]

    constructor(private fb: CreditCardFormBuilder){
        this.ccform = fb.build();
    }

    ngOnInit(): void {
        this.monthNames = months();
        this.years = yearsFromNow(5);

        const whenTrue = value => value;

        this.ccform.valueChanges
            .pipe(
                map(_ => this.ccform.valid),
                distinctUntilChanged(),
                tap(value => this.validityChange.next(value))
            ).subscribe(console.log)

        this.ccform.valueChanges
            .pipe(map(v => [v, this.ccform.valid]))
            .subscribe(console.log);
    }
}