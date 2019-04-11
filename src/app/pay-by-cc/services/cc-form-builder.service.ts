import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validCard } from 'src/app/pay-by-cc/validations/cc.validation';

@Injectable({
    providedIn: 'root'
})
export class CreditCardFormBuilder {
    constructor(private fb: FormBuilder){

    }

    build(): FormGroup {
        const {fb} = this;

        return fb.group({
            'number': ['', Validators.compose([Validators.required, validCard])],
            'name': [],
            'cvv': [],
            'expiryYear': [],
            'expiryMonth': []
        });
    }
}